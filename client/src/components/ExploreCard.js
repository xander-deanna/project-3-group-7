import React, { Component } from "react";

export default class ExploreCard extends Component {
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
        console.log(this.props)
        return (
            <div className="columns is-mobile is-multiline is-centered">
                <div className="card">
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
                            <button className="button is-light is-primary is-pulled-right save-btn">
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