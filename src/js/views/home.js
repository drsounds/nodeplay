import {Link} from 'react-router';
import React from 'react';
import {FeaturedConstants} from '../constants/FeaturedConstants';
import {FeaturedActions} from '../actions/FeaturedActions';
import {FeaturedStore} from '../stores/FeaturedStore';
import Card from '../components/card';
import Banner from '../components/banner';
import {MovieStore} from '../stores/MovieStore';
import {MovieActions} from '../actions/MovieActions';
import {MovieConstants} from '../constants/MovieConstants';
import {Flow} from '../components/flow';

export class HomeView extends React.Component {
    constructor() {
        super();
        this.state = {
            featured: [],
            recentMovies: []
        };
        
        this._onFeaturedChange = this._onFeaturedChange.bind(this);
        this._onMoviesChange = this._onMoviesChange.bind(this);
    }    
    _onMoviesChange() {
        this.setState({recentMovies: MovieStore.getData().objects});
    }
    _onFeaturedChange() {
        var data = FeaturedStore.getData();
        this.setState({featured: data.objects});
    }
    componentDidMount() {
        FeaturedStore.addChangeListener(this._onFeaturedChange);
        MovieStore.addChangeListener(this._onMoviesChange);
        FeaturedActions.loadFeatured();
        MovieActions.loadRecent();
    }
    render() {
        return React.DOM.div(
            {
                className: 'container'
            },
            React.DOM.div(
                {
                    className: 'row'
                },
                
                this.state.featured.map(
                    (item, i) => {
                        return React.DOM.div(
                            {
                                className: 'col-md-12'
                            },
                            React.createElement(
                                Banner,  
                                {
                                    item: item,
                                    key: 'featured-' + i
                                }
                            )
                        )
                    }
                )
            ),
            React.createElement(
                Flow,
                {
                    title: 'Senaste programmen',
                    objects: this.state.recentMovies
                }
            )
        )
    }
}