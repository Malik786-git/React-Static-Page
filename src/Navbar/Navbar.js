import React, { Component } from 'react'
import Navitems from './Navitem'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className='logo'>
            Trio Tech
        </div>
        <div>
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
