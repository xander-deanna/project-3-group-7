import axios from "axios";

export default {
    // gets artwork by artist
    getArt: function (query) {
        return axios.get(`https://api.artsy.net/api/artists/${query}`);
    },
    // saves a work of art to user's gallery
//Need to create a route and appropriate controller for this route

    saveArt: function (artData) {
         return axios.post("/api/books/", artData);
       },

    // 
    // getArt: function (query) {
    //     return axios.get(`https://api.artsy.net/api/artists/${query}`);
    // }
}