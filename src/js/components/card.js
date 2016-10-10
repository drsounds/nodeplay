const React = require('react');
const {Link} = require('react-router');


export default class Card extends React.Component {
    constructor() {
        super();
    }
    render() {
        return React.DOM.div(
            {
                className: 'card'
            },
            React.DOM.div(
                {
                    className: 'card-block'
                }  
            ),
            React.DOM.h3(
                {
                    className: 'card-title'
                },
                React.createElement(
                    Link,
                    {
                        to: this.props.item.url
                    },
                    this.props.item.name
                )
            )
        )
    }
    
}