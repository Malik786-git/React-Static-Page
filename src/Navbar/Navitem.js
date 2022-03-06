import React, { Component } from 'react'

export default class Navitems extends Component {
  render() {
    return (
      <li>
          {this.props.item}
      </li>
    )
  }
}
