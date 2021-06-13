import React, { Component } from "react";
import GalleryCard from "../../components/GalleryCard.js";

// navbar component
import Navigation from "../../components/Navigation/Navigation";

import Meseum from "../../utils/meseum-api";

export default class Gallery extends Component {
    constructor (props) {
        super(props)
        this.state = {artworks: []}
        Meseum.getAllArt().then(res => {
            this.setState({artworks: res.data.data})
        })
    } 
    render() {
        return (
            <div>
                <Navigation />
                <h3>Gallery</h3>
                {this.state.artworks.map((value, index) => {
                    return <GalleryCard {...value} key={index}/>
                })}
            </div>
        )
    }
};
