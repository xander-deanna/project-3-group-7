import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation.js";
import ExploreCard from "../../components/ExploreCard.js";
import { Form } from 'react-bulma-components';
const { Field, Control, Input } = Form;

import API from "../../utils/API"

export default class Explore extends Component {
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
        return (
            <div>
                <Navigation/>
                <Field>
                    <Control className="has-icons-left">
                    <Input
                        placeholder="Search your favorite artists here."
                        type="text"
                        color="dark"
                    />
                    </Control>
                </Field>

                {/* Test Card */}
                <ExploreCard/>
            </div>
        );
    }
}

//api call 
//have star option to save
//database componenet
//card render, for each search show the paiting in multiple cards(title, pic, etc)