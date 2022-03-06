import React, { Component } from 'react'
import Navitems from './Navitem'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <div className='logo'>
            Trio Tech
        </div>
        <div className='items'>
            <ul>
                <Navitems item='Home'/>
                <Navitems item='Product'/>
                <Navitems item='About'/>
                <Navitems item='Contact'/>
            </ul>
        </div>
      </div>
    )
  }
}
