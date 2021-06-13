import React, { Component } from "react";

import Meseum from "../utils/meseum-api";


export default class ExploreCard extends Component {
    artSave = id => {
        //select the current art by id and assign its value to variable art
        const art = {
            title: this.props.title,
            artist: this.props.artistName,
            date: this.props.date,
            medium: this.props.medium,
            dimensions: this.props.dimensions,
            imgUrl: this.props.imgUrl
        }
        //API call to post id to backend 
        Meseum.saveArt(art). then((res) => {
            console.log(res)
            //write codes for what you want to happen after the art has been posted to datatbase
        })
    }
    render() {
        console.log(this.props)
        return (
            <div className="columns is-mobile is-multiline is-centered">
                <div className="card explore-card">
                    <div className="card-content">
                        <div className="media-center">
                            <img className="artsy-img"src={this.props.imgUrl}/>
                        </div>
                        <br/>
                        <div className="content">
                            <strong>{this.props.artistName}</strong><br/>
                            <em>{this.props.title}</em>
                            <ul>
                                <li>
                                    {this.props.date}
                                </li>
                                <li>
                                    {this.props.medium}
                                </li>
                                <li>
                                    {this.props.dimensions}
                                </li>
                            </ul>
                            <button onClick={this.artSave} className="button is-light is-primary is-pulled-right save-btn">
                                <i className="fas fa-star"></i>
                            </button>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}