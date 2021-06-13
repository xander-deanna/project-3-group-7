import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import GalleryCard from "../../components/GalleryCard.js";

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
            <>
                <Navigation />
                <section className="section">
                    <div className="container gallery-container">
                        {this.state.artworks.map((value, index) => {
                            return (
                                <div className="columns is-multiline">
                                    <GalleryCard {...value} key={index} updateState={this.updateStateCallback}/>
                                </div>
                        )
                        })}
                    </div>
                </section>
            </>
        )
    }
};
