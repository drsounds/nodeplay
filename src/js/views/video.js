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
import {Player} from '../components/player';


export class VideoView extends React.Component {
    constructor() {
        super();
        this.state = {
            featured: [],
            recentMovies: [],
            movie: null
        };
        
        this._onFeaturedChange = this._onFeaturedChange.bind(this);
        this._onMoviesChange = this._onMoviesChange.bind(this);
        this.renderMovie = this.renderMovie.bind(this);
    }    
    _onMoviesChange() {
        var data =  MovieStore.getData();
        this.setState({movie: data.movie});
    }
    _onFeaturedChange() {
        var data = FeaturedStore.getData();
        this.setState({featured: data.objects});
    }
    componentDidMount() {
        FeaturedStore.addChangeListener(this._onFeaturedChange);
        MovieStore.addChangeListener(this._onMoviesChange);
        FeaturedActions.loadFeatured();
        MovieActions.loadMovieById(this.props.params.id);
    }
    renderMovie() {
        if (!this.state.movie) {
            return 'Loading';
        }
        
        return  React.DOM.div(
            null,
            React.DOM.div(
                {
                    className: 'section section-alternative',
                    style: {
                        position: 'relative',
                    }
                },
                React.DOM.div(
                    {
                        className: 'container',
                        
                    },
                    React.DOM.div(
                        {
                            className: 'row',
                            
                        }, 
                        React.DOM.div(
                            null,
                            React.createElement(
                                Player,  
                                {
                                    style: {
                                        position: 'absolute',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)'
                                    },
                                    movie: this.state.movie
                                }
                            )
                        )
                    )
                )
            ),
            React.DOM.div(
                {
                    className: 'section section-content',
                    style: {
                        textAlign: 'center'
                    }
                }, 
                this.state.movie.name
            )
        )
    }
    render() {
        return React.DOM.div(
            null,
            this.renderMovie()
        );
    }
}