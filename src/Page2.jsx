import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import'./css/Page2.css'

export default class extends Component {
  render() {
    return (
      <div className='main1'>
        <h1>WELCOME TO PAGE 2</h1>
        <br/><br/>
        <h2>CSS</h2>
        <br/><br/>
        <div id='text1'>
          <h3>Today's class is html and css</h3>
        </div>
        <Link to="/page1">Go to Page1</Link>
        <br/><br/>
        <Link to="/">Go to Homepage</Link>
      </div>
    )
  }
}