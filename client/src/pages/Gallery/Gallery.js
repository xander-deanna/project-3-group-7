import React, { Component, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import GalleryCard from "../../components/GalleryCard.js";
import ArtsyColorPicker from "../../components/ColorPicker.js";
import Meseum from "../../utils/meseum-api";

export default class Gallery extends Component {
    constructor(props) {
        super(props) 
        this.deleteArtByID = this.deleteArtByID.bind(this)
        this.setBackground = this.setBackground.bind(this)
    }
    state = {
        artworks: [],
        color: "#ffffff"
    }
    componentDidMount () {
        Meseum.getAllArt().then(res => {
            this.setState({artworks: res.data.data})
        })
    }
    deleteArtByID (_id) {
        this.setState({artworks:this.state.artworks.filter((art) => art._id !== _id)})
    }
    setBackground (color) {
        this.setState({color})
    }
    render() {
        // Attempt at added a color picker and setting default state to white
        // const [color, setColor] = useState('#fff')

        return (
            <div style ={{
                backgroundColor: this.state.color,
            }}>
                <Navigation />
                <section className="section">
                    <div className="container gallery-container">
                        {this.state.artworks.map((value, index) => {
                            return (
                                <div className="columns is-multiline">
                                    <GalleryCard {...value} key={index} updateState={this.deleteArtByID}/>
                                </div>
                            )
                        })}
                        <ArtsyColorPicker
                            style={{
                                height: "100px",
                                width: "100px"
                            }}
                            setBackground={this.setBackground}
                        />
                    </div>
                </section>
            </div>
        )
    }
};
