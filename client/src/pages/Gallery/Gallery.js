import React, { Component, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import GalleryCard from "../../components/GalleryCard.js";
import ArtsyColorPicker from "../../components/ColorPicker.js";
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
        // Attempt at added a color picker and setting default state to white
        // const [color, setColor] = useState('#fff')

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
                        <ArtsyColorPicker
                            style={{
                                height: "100px",
                                width: "100px"
                            }}
                        />
                    </div>
                </section>
            </>
        )
    }
};
