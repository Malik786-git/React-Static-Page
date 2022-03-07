import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './card.css';
export default class Card extends Component {
    render() {

        return (
            <>
                <div className='cardContainer'>
                    <figure>
                        <img
                            src={this.props.image}
                            alt='Team-Member'
                        />
                    </figure>
                    <main>
                        <h5>{this.props.developer}</h5>
                        <p>{this.props.about}</p>
                    </main>
                </div>
            </>
        )
    }
}

Card.propTypes = {
    developer: PropTypes.string,
    about: PropTypes.string
}
Card.propTypes = {
    image: 'team'
}