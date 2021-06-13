import axios from "axios";

// global variables for API call token
const clientID = '5b7eb2568e3b3f888f85';
const clientSecret = '7941b6cc8fec588390fdb67abdc32930';
const tokenUrl = 'https://api.artsy.net/api/tokens/xapp_token?';
const url = 'https://api.artsy.net/api/';

// need a way to check if token is expired, if expired, run getToken() again to get a new token

// global variables for Artist
let artistId;
let artistName;

// need to have token in request session
app.use(express.session({ secret: xappToken }));
// figure out how passwort sessions work
// use token in the backend api to call artsy
// create one backend api for each get

export default {
    // gets API token, is called on page reload
    getToken: function () {
        return axios.post(`${tokenUrl}client_id=${clientID}&client_secret=${clientSecret}`)
            .then(function (res) {
                return {
                    xappToken: res.data.token,
                    expiration: res.data.expires_at,
                }
            })
    },

    // Artsy API call to search based on artist name
    getArtist: function (req, res) {
        return this.getToken().then((token) => {
            axios.get(`${url}search?q=(${req.query.query})`, {
                // sets headers to present token
                headers: {
                    'X-xapp-token': token.xappToken,
                }
            })
    
            // returns only results of type "artist", grabs artist ID and name
            .then(function (data) {
                console.log('artist data object: ', data)
    
                // artistId
                artistId = data.data._embedded.results.filter(function (item) {
                    return item.type === 'artist';
                })[0]._links.self.href.split('/').pop();
                console.log('artistId: ', artistId)
    
                // artistName
                artistName = data.data._embedded.results.filter(function (item) {
                    return item.type === 'artist';
                })[0].title;
                console.log('artistName: ', artistName)
    
                // runs another axios get request to search artworks using the artistId we just grabbed
                return axios.get(`${url}artworks?artist_id=${artistId}`, {
                    // sets headers to present token
                    headers: {
                        'X-xapp-token': xappToken,
                    }
                })
            })
    
            // gets the results of above
            .then(function (results) {
            console.log('results of searching artworks by artist ID: ', results)
                if (results.data._embedded.artworks.length == 0) {
                    console.log("No art found! (ME)seum is only able to search public works, please try another artist.")
                        // noArtFound()
                    ;
                }
                else { 
                    // for loop that searchs the the API for artworks based on the artwork ID
                    // currently limited to 3 due to API rate limiting, working on work-arround
                    setTimeout(() => {
                        let maxArtwork = 5;
                        if (results.data._embedded.artworks.length <= 5) {
                            maxArtwork = results.data._embedded.artworks.length
                        }
                        let promises = [];
    
                        for (var i = 0; i < maxArtwork; i++) {
                            var arrayId = results.data._embedded.artworks[i].id;
                            promises.push(axios.get(`${url}/artworks/${arrayId}`, {
                                // sets headers to present token
                                headers: {
                                    'X-xapp-token': xappToken,
                                }
                            }));
                        }
                        axios.all(promises)
                            // pushes final results into imageArray to use in the front end
                            .then(axios.spread((...responses) => {
                                let imageArray = []
                                for (var i = 0; i <responses.length; i++) {
                                    let results = responses[i]
                                    var id = results.data.id;
                                    var image = results.data._links.thumbnail.href;
                                    var title = results.data.title;
                                    var date = results.data.date;
                                    var medium = results.data.medium;
                                    var dimensions = results.data.dimensions.in.text
                            
                                    imageArray.push({
                                        imgId: id,
                                        imgUrl: image,
                                        title: title,
                                        date: date,
                                        medium: medium,
                                        artistName: artistName,
                                        dimensions: dimensions
                                    });
                                }
                                res.json(imageArray)
                            }))
                    }, 1000)
                }
            })    
        })
    }
};