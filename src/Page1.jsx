import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Page1 extends Component {
  render() {
    return (
      <div>
        <h1>WELCOME TO PAGE1</h1>
        <br/><br/>
        <Link to="/page2">Go to Page2</Link>
        <br/><br/>
        <Link to="/">Go to Homepage</Link>
      </div>
    )
  }
}
