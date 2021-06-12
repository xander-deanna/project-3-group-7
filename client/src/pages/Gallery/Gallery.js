import React, { Component } from "react";

// navbar component
import Navigation from "../../components/Navigation/Navigation";

import Meseum from "../../utils/meseum-api";

export default class Gallery extends Component {
    constructor (props) {
        super(props)
        this.state = {}
        Meseum.getAllArt().then(res => {
            this.setState({artworks: res.data.data})
        })
    } 
    render() {
        return (
            <div>
                <Navigation />
                <h3>Gallery</h3>
            </div>
        )
    }
};
