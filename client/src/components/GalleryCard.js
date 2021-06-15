import React, { Component } from "react";
import Draggable from 'react-draggable';
import Meseum from "../utils/meseum-api";

export default class GalleryCard extends Component {
    artDelete = id => {
        //select the current art by id and assign its value to variable art
        let _id = this.props._id
        Meseum.deleteArt(this.props._id).then((res) => {
            console.log(res)
            this.props.updateState(_id)
        })
    }

    render() {
        // stops react-draggable effect when clicking delete button
        const onStop = (e) => {
            e.stopPropagation()
        }
        return (
            <Draggable className="card gallery-card" onStop={onStop}>
                <div className="card-content">
                    <div className="media-center art-frame">
                        <img className="artsy-img-gallery"src={this.props.imgUrl}/>
                    </div>
                    <br/>
                    <button onClick={this.artDelete} className="delete"/>
                    <div className="art-plaque">
                        <ul className="art-plaque-content">
                            <li>
                            <em>{this.props.title}, <strong>{this.props.artist}</strong></em>
                            </li>
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
                    </div>
                </div>
            </Draggable>
        );
    }
}