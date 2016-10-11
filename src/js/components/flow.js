const React = require('react');
const {Link} = require('react-router');

const {Card} = require('./card');


export class Flow extends React.Component {
    constructor() {
        super();
    }
    render() {
        
        return React.DOM.div(
            {
                className: 'row section'
            },
            React.DOM.div(
                {
                    className: 'col-md-12'
                }
            ),
            React.DOM.div(
                {
                    className: 'row'
                },
                React.DOM.div(
                    {
                        className: 'col-md-12'
                    },
                    this.props.title
                )
            ),
            React.DOM.div(
                {
                    className: 'row'
                },
                this.props.objects.slice(0, 5).map((item) => {
                    return React.DOM.div(
                        {
                            className: 'col-md-3'
                        },
                        React.createElement(
                            Card,
                            {
                                item: item
                            }
                        )
                    )
                })
            )
        )
    }
    
}