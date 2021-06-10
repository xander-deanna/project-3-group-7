import axios from "axios";
// import { func } from "prop-types";
//searches API
export default {
    // gets artwork by artist
    artByArtist: function (query) {
        return axios.get(`https://api.artsy.net/api/artists/${query}`);
    },
    //save art to db
    saveArt: function(artData) {
        return axios.post("/api/artists", artData);
    },
    //get saved art from db
    getArtDB: function() {
        return axios.get("/api/artists");
    },
    //get saved art with ID
    getArt: function(id) {
        return axios.get("api/artists/" + id);
    },
    //delete art by ID
    deleteArt: function(id) {
        return axios.delete("/api/artists/" + id);
    }
};