import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation.js";
import ExploreCard from "../../components/ExploreCard.js";
import { Form } from 'react-bulma-components';
const { Field, Control, Input } = Form;

import API from "../../utils/API"

export default class Explore extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: "",
            artworks: [],
            search: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    // creates new token on page load
    componentDidMount() {
        window.addEventListener('load', API.getToken());
     }

    // runs getArtist from API.js with the input from our searchbar
    searchArt = query => {
        API.getArtist(query)
    }
    
    // takes in the input from the searchbar (???maybe???)
    handleInputChange = event => {
        const value = event.target.value;
        this.setState({
            search: value
        });
        console.log(event.target)
        console.log(this.state)
    };

    // executes searchArt on submit
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchArt(this.state.search);
        console.log(this.state.search)
    };

    render() {
        return (
            <div>
                <Navigation/>
                <form onSubmit={this.handleFormSubmit}>
                    <Field>
                        <Control className="has-icons-left">
                        <Input
                            search={this.state.search}
                            onChange={this.handleInputChange}
                            placeholder="Search your favorite artists here."
                            type="text"
                            color="dark"
                        />
                        
                        </Control>
                    </Field>
                </form>

                {/* Test Card */}
                <ExploreCard/>
            </div>
        );
    }
}