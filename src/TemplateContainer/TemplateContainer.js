import React, { Component } from 'react';
import CardPageTemplate from '../Templates/CardPageTemplate.js'
import './TemplateContainer.css';

export default class TemplateContainer extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='TemplateContainer'>
        <CardPageTemplate />
      </div>
    )
  }
}