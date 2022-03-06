import React, { Component } from 'react';
import main from './logo512.png';
import './Hero.css'
export default class Hero extends Component {
    render() {
        return (
            <div className='HeroSection'>
                <div className='heroDetail'>
                    <h1>We Are Create  Value <br/>
                        For Your Business <br/>
                        With React js
                        </h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Quidem distinctio voluptate dicta et tempore similique voluptatibus
                        Quidem distinctio voluptate dicta et tempore similique voluptatibus
                        pariatur..
                    </p>

                </div>
                <div className='heroImage'> 
                    <figure>
                        <img src={main} alt='main-image'/>
                    </figure>
                </div>
            </div>
        )
    }
}
