import {Link} from 'react-router';
import React from 'react';
import {FeaturedConstants} from '../constants/FeaturedConstants';
import {FeaturedActions} from '../actions/FeaturedActions';
import {FeaturedStore} from '../stores/FeaturedStore';
import Card from '../components/card';


export class HomeView extends React.Component {
    constructor() {
        super();
        this.state = {
            featured: []
        };
        
        this._onFeaturedChange = this._onFeaturedChange.bind(this);
    }    
    _onFeaturedChange(data) {
        this.setState({featured: data.objects});
    }
    componentDidMount() {
        FeaturedStore.addChangeListener(this._onFeaturedChange);
        FeaturedActions.loadFeatured();
    }
    render() {
        return React.DOM.div(
            {
                className: 'container'
            },
            React.DOM.div(
                {
                    className: 'row'
                }
            ),
            this.state.featured.map(
                (item) => {
                    return React.createElement(
                        Card,  
                        {
                            item: item
                        }
                    )
                }
            )
        )
    }
}