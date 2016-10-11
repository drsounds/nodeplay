const React = require('react');
const {Link} = require('react-router');


export class Card extends React.Component {
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
                    className: 'card-header',
                    style: {
                        backgroundImage: 'url("' + this.props.item.image_url + '")',
                        backgroundSize: 'cover'
                    }
                }
            ),
            React.DOM.div(
                {
                    className: 'card-block'
                }  
            ),
            React.DOM.span(
                {
                    className: 'card-title'
                },
                React.createElement(
                    Link,
                    {
                        to: this.props.item.url
                    },
                    this.props.item.name,
                    React.DOM.p(
                        null,
                        this.props.item.description
                    )
                )
            )
        )
    }
    
}