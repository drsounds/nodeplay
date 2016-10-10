const React = require('react');
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
const {CategoryStore} = require('../stores/CategoryStore');
const {CategoryActions} = require('../actions/CategoryActions');
const {CategoryConstants} = require('../constants/CategoryConstants');
var T = require('i18n-react');


export class CategoriesView extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: []
        };
        this._onChange = this._onChange.bind(this);
    }
    componentDidMount() {
        CategoryStore.addChangeListener(this._onChange);     
        t
    }
    _onChange(data) {
        this.setState({categories: data.categories});
    }
    render() {
        return React.createElement(
            'div',
            null,
            React.DOM.table(
                null,
                React.DOM.thead(
                    null,
                    React.DOM.tr(
                        null,
                        React.DOM.th(
                            {
                                text: 'name'
                            },
                            'Namn'
                        )
                    )
                ),
                React.DOM.tbody(
                    null,
                    this.state.categories.map((category) => {
                        return React.DOM.tr(
                            null,
                            React.DOM.td(
                                null,
                                React.D
                            )
                        )
                    })
                )
            )
        );
    }
}