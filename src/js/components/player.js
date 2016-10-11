const React = require('react');
const {Link} = require('react-router');
const YouTube = require('react-youtube');


export class Player extends React.Component {
    constructor() {
        super();
    }
    render() {
        return React.DOM.div(
            {
                className: 'player'
            },
            this.props.movie ? 
            React.createElement(
                YouTube.default,
                {
                    videoId: this.props.movie.id,
                    opts: {
                        width: '1150',
                        height: '720'
                    }
                }
            ) : ''
        )
    }
}