import React, { Component } from 'react';
import './Templates.css';

export default class CardPageTemplate extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='CardPageTemplate'>
        <div className='template-header'></div>
        <div className='template-card-container'>
          <div className='template-card'></div>
          <div className='template-card'></div>
          <div className='template-card'></div>
          <div className='template-card'></div>
        </div>
        <div className='template-footer'></div>
      </div>
    )
  }
}