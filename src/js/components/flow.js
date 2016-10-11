const React = require('react');
const {Link} = require('react-router');

const {Card} = require('./card');


export class Flow extends React.Component {
    constructor() {
        super();
    }
    render() {
        
        return React.DOM.section(
            {
                className: 'row'
            },
            React.DOM.div(
                {
                    className: 'col-md-12'
                },
                this.props.title
            ),
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
    }
    
}