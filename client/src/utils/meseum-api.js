import axios from "axios";
export default {
    // save art to db
    // will need to create button for this on explore card
    saveArt: function(artData) {
        return axios.post('/api/artists', artData);
    },

    // get saved art from db
    // should be called automatically upon rendering of gallery page
    getAllArt: function() {
        return axios.get('/api/artists');
    },

    // delete art by ID
    // will need to create button for this on gallery card
    deleteArt: function(id) {
        return axios.delete('/api/artists/' + id);
    }
}; 