const React = require('react');
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
const {CategoryStore} = require('../stores/CategoryStore');

var T = require('i18n-react');


export class AppView extends React.Component {
    constructor() {
        super();
        this._onChange = this._onChange.bind(this);
    }
    componentDidMount() {
    }
    _onChange(data) {
    }
    render() {
        return React.DOM.div(
            null,
            React.DOM.div(
                {
                    className: 'container'
                },
                React.DOM.div(
                    {
                        className: 'row'
                    },
                    React.DOM.nav(
                        {
                            className: 'navbar navbar-dark'
                        },
                        React.createElement(
                            Link,
                            {
                                className: 'navbar-brand',
                                to: '/'
                            },
                            'En annan frekvens'
                        ),
                        React.DOM.ul(
                            {
                                className: 'nav navbar-nav'
                            },
                            React.DOM.li(
                                null,
                                React.createElement(
                                    Link,
                                    {
                                        to: '/',
                                        
                                    },
                                    'Hem'
                                )
                            ),
                            React.DOM.li(
                                null,
                                React.createElement(
                                    Link,
                                    {
                                        to: '/categories',
                                        
                                    },
                                    'Kategorier'
                                )
                            ),
                            React.DOM.li(
                                null,
                                React.createElement(
                                    Link,
                                    {
                                        to: '/about',
                                        
                                    },
                                    'Om'
                                )
                            )
                        )
                    )
                )
            ),
            this.props.children
            
        )
    }
}