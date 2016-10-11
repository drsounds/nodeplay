const {AppView} = require('./views/app');
const React = require('react');
const {HomeView} = require('./views/home');
const {AboutView} = require('./views/about');
const {CategoryListView} = require('./views/categories');

import { Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router'

const {render} = require('react-dom');

render(
    React.createElement(
        Router,
        {
            history: browserHistory
        },
        React.createElement(
            Route,
            {
                path: '/',
                component: AppView
            },
            React.createElement(
                IndexRoute,
                {
                    component: HomeView
                }
            ),
            React.createElement(
                Route,
                {
                    path: '/categories',
                    component: CategoryListView
                }
            ),
            React.createElement(
                Route,
                {
                    path: '/about',
                    component: AboutView
                }
            )
        )
    ),
    document.querySelector('#app')
);