import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import API from "../../utils/API"
export default class Explore extends Component {
    artSave = id => {
        //select the current art by id and assign its value to variable art
        const art = 
        //API call to post id to backend 
        API.saveArt(
            //art details object goes here
            ). then(() => {
            //write codes for what you want to happen after the art has been posted to datatbase
            }
            )
    }
    render() {
        return (
            <div>
                <Navigation/>
                <h3>Explore</h3>
                <label>Search Artist/search paiting</label>
                <input></input>
            </div>
        );
    }
}

//api call 
//have star option to save
//database componenet
//card render, for each search show the paiting in multiple cards(title, pic, etc)