import axios from "axios";

// global variables for API call token
const clientID = '5b7eb2568e3b3f888f85';
const clientSecret = '7941b6cc8fec588390fdb67abdc32930';
const tokenUrl = 'https://api.artsy.net/api/tokens/xapp_token?';
let xappToken;

const url = 'https://api.artsy.net/api/';

// global variables for Artist
var artistId;
var artistName;
var imageArray = [];

// there needs to be an onClick function in the search that calls getToken and getArtist

export default {

    // gets API token
    getToken: function () {
        return axios.post(`${tokenUrl}client_id=${clientID}&client_secret=${clientSecret}`)
            .done(function (res) {
                xappToken = res.token;
            })
    },

    // Artsy API call to get artist name and ID
    getArtist: function (query) {
        return axios.get(`${url}search?q=(${query})`)
            .done(function (data) {
                artistId = data._embedded.results.filter(function (item) {
                    return item.type === 'artist';
                  })[0]._links.self.href.split('/').pop();
            
                  getArt(artistId);
            
                artistName = data._embedded.results.filter(function (item) {
                    return item.type === 'artist';
                  })[0].title;
            })
    },

    // Queries the API based on the artist ID and returns a list of all artworks
    getArt: function (id) {
        return axios.get(`${url}artworks?artist_id${id}`)
            .done(function (results) {
                if (results._embedded.artworks.length == 0) {
                    console.log("No art found!");
                }
                for (var i = 0; i < results._embedded.artworks.length; i++) {
                    var arrayId = results._embedded.artworks[i].id;
                    getArtwork(arrayId, i);
                }
            }
        )
    },

    // Takes each artwork id, takes the details of each piece, adds to an object which is then pushed to the array
    getArtwork: function (id, counter) {
        return axios.get(`${url}/artworks/${id}`)
            .done(function (results) {
                var id = results.id;
                var image = results._links.thumbnail.href;
                var title = results.title;
                var date = results.date;
                var medium = results.medium;
          
                imageArray.push({
                  arrayId: counter,
                  imgId: id,
                  imgUrl: image,
                  title: title,
                  date: date,
                  medium: medium,
                });
            })
    },

    // save art to db
    // will need to create button for this on explore card
    saveArt: function(artData) {
        return axios.post('/api/artists', artData);
    },

    // get saved art from db
    // should be called automatically upon rendering of gallery page
    getArtDB: function() {
        return axios.get('/api/artists');
    },

    // get saved art with ID
    // we may not need this one?
    getArtDB: function(id) {
        return axios.get('api/artists/' + id);
    },

    // delete art by ID
    // will need to create button for this on gallery card
    deleteArt: function(id) {
        return axios.delete('/api/artists/' + id);
    }
};