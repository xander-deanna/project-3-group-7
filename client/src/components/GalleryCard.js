import React, { Component } from "react";

export default class GalleryCard extends Component {
    deleteArt = id => {
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
            <div className="columns is-mobile is-multiline is-centered">
                <div className="card">
                    <div className="card-content">
                        <div className="media-center">
                            <img src="https://www.guyhepner.com/wp-content/uploads/2016/02/Screen-Shot-2016-02-15-at-5.52.06-PM.png"/>
                        </div>
                        <br/>
                        <div className="content">
                            <strong>Andy Warhol</strong><br/>
                            <em>Marilyn Monroe 29</em>
                            <ul>
                                <li>
                                    Medium
                                </li>
                                <li>
                                    Year
                                </li>
                                <li>
                                    Dimensions
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}