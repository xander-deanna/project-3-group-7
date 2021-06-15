import axios from "axios";

export default {
    // Artsy API call to search based on artist name
    getArtist: function (query, callback) {
        return axios.get(`/api/artsy?q=(${query})`)

        // returns only results of type "artist", grabs artist ID and name
        .then((results) => {
            console.log(results.data)
            callback(results.data)
        })    
    }
};