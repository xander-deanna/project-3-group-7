import React, { Component } from 'react';
import axois from 'axois';
import API from '../../utils/API';


class Home extends Component {
    state = {
        books: [],
        search: ""
    };
    

    //function to search for art artsy api
    searchArt = () => {
        API.artByArtist(this.state.search)
        .then(res => {
            console.log("This is res.data", res.data.items)
            this.setState({
                books: res.data.items,
                search: ""
            })
        })
        .catch(err => console.log(err));
    };

    //create function to handle input data
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    //create function to handle from data submission
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchArt();
    };

    saveArt = currentArt => {
        console.log("this is the current art", currentArt);
        API.saveArt({
            id: currentArt.id,
            title: currentArt.title,
            artist: currentArt.artist,
            date: currentArt.date,
            medium: currentArt.medium,
            image: currentArt.image

        })
        .then(res => console.log("Successful POST to DB", res))
        .catch(err => console.log("this is the error", err));
    }

    render() {
        return (
            <div>
                <h3>Explore</h3>
                <label>Search Artist/search paiting</label>
                <input></input>
            </div>
        )
    }

}

//api call 
//have star option to save
//database componenet
//card render, for each search show the paiting in multiple cards(title, pic, etc)