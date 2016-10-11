const React = require('react');
const {Link} = require('react-router');


export default class Banner extends React.Component {
    constructor() {
        super();
    }
    render() {
        return React.DOM.div(
            {
                className: 'banner',
                style: {
                    backgroundImage: 'url("' + this.props.item.imageUrl + '")'
                }
            },
            React.DOM.div(
                {
                    className: 'banner-block'
                },
                React.DOM.div(
                    {
                        className: 'banner-title'
                    },
                    React.DOM.h3(
                        null,
                        React.createElement(
                            Link,
                            {
                                to: this.props.item.url
                            },
                            this.props.item.name
                        )
                    )
                )
            )
        )
    }
    
}