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
                        React.DOM.form(
                            {
                                className: 'form-inline pull-xs-right',
                                onSubmit: this._onSearch
                            },
                            React.DOM.input(
                                {
                                    className: 'form-control',
                                    type: 'search',
                                    placeholder: 'Sök',
                                    ref: 'search'
                                }    
                            )
                        ),
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
                                {
                                    className: 'nav-item'
                                },
                                React.createElement(
                                    Link,
                                    {
                                        to: '/',
                                        className: 'nav-link'
                                        
                                    },
                                    'Hem'
                                )
                            ),
                            React.DOM.li(
                                {
                                    className: 'nav-item'
                                },
                                React.createElement(
                                    Link,
                                    {
                                        to: '/categories',
                                        className: 'nav-link'
                                        
                                    },
                                    'Kategorier'
                                )
                            ),
                            React.DOM.li(
                                {
                                    className: 'nav-item'
                                },
                                React.createElement(
                                    Link,
                                    {
                                        to: '/about',
                                        className: 'nav-link'
                                        
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