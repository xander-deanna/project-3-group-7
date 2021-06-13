import React, { Component } from "react";
import GalleryCard from "../../components/GalleryCard.js";

// navbar component
import Navigation from "../../components/Navigation/Navigation";

import Meseum from "../../utils/meseum-api";

export default class Gallery extends Component {
    constructor(props) {
        super(props) 
        this.updateStateCallback = this.updateStateCallback.bind(this)
    }
    state = {artworks: []}
    componentDidMount () {
        Meseum.getAllArt().then(res => {
            this.setState({artworks: res.data.data})
        })
    }
    updateStateCallback (_id) {
        this.setState({artworks:this.state.artworks.filter((art) => art._id !== _id)})
    }
    render() {
        return (
            <div>
                <Navigation />
                <h3>Gallery</h3>
                {this.state.artworks.map((value, index) => {
                    return <GalleryCard {...value} key={index} updateState={this.updateStateCallback}/>
                })}
            </div>
        )
    }
};
