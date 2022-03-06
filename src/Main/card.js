import React, { Component } from 'react'
import './card.css'
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
                    <content>
                        <h5>{this.props.developer}</h5>
                        <p>{this.props.about}</p>
                    </content>
                </div>
            </>
        )
    }
}
