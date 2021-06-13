const axios = require("axios");
const tokenUrl = 'https://api.artsy.net/api/tokens/xapp_token?';
const url = 'https://api.artsy.net/api/';

// need to have token in request session
// app.use(express.session({ secret: xappToken }));
// figure out how passwort sessions work
// use token in the backend api to call artsy
// create one backend api for each get
//  2021-06-20T19:15:14+00:00

function getToken (req) {
    if (req.session.artsyToken != undefined && Date(req.session.artsyExpire) > Date.now()) {
        return new Promise((resolve, reject) => {
            resolve(req.session.artsyToken)
        })
    }
    return axios.post(`${tokenUrl}client_id=${process.env.artsyClientID}&client_secret=${process.env.artsyClientSecret}`)
        .then(function (res) {
            req.session.artsyToken = res.data.token
            req.session.artsyExpire = res.data.expires_at
            return {
                xappToken: res.data.token,
                expiration: res.data.expires_at,
            }
        })
}

module.exports = {
    // Artsy API call to search based on artist name
    getArtist: function (req, res) {
        return getToken(req).then((token) => {
            axios.get(`${url}search?q=(${req.query.q})`, {
                // sets headers to present token
                headers: {
                    'X-xapp-token': req.session.artsyToken,
                }
            })
    
            // returns only results of type "artist", grabs artist ID and name
            .then(function (data) {
                console.log('artist data object: ', data)
    
                // artistId
                let artistId = data.data._embedded.results.filter(function (item) {
                    return item.type === 'artist';
                })[0]._links.self.href.split('/').pop();
                console.log('artistId: ', artistId)
    
                // artistName
                let artistName = data.data._embedded.results.filter(function (item) {
                    return item.type === 'artist';
                })[0].title;
                console.log('artistName: ', artistName)
    
                // runs another axios get request to search artworks using the artistId we just grabbed
                return axios.get(`${url}artworks?artist_id=${artistId}`, {
                    // sets headers to present token
                    headers: {
                        'X-xapp-token': req.session.artsyToken,
                    }
                })
                .then(function (results) {
                    return new Promise((resolve, reject) => {
                        resolve([
                            results, artistName
                        ])
                    })
                })
            })
    
            // gets the results of above
            .then(function (completeResults) {
            let results = completeResults[0]
            let artistName = completeResults[1]
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
                                    'X-xapp-token': req.session.artsyToken,
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
        }).catch((err) => {
            res.status(400).json({
                success: false, error: err
            })
        }) 
    }
};