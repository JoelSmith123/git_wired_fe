import React, { Component } from 'react';
import './Templates.css';

export default class BlogPageTemplate extends Component {
  constructor() {
    super()

    this.state = {
      headerButtons: 0
    }
  }

  addBtnToHeader = (event) => {
    event.preventDefault()
    this.setState({ headerButtons: this.state.headerButtons + 1 })
  }

  renderBtnToHeader = () => {
    const btnArr = []
    for (let i = 0; this.state.headerButtons > i; i++) {
      btnArr.push(<button key={i} className='template-header-btn'></button>)
    }
    return btnArr
  }

  render() {
    return (
      <div className='BlogPageTemplate'>
        <div className='template-header'>
        <div className='pseudo-btn-space'></div>
          <i className="far fa-plus-square" onClick={this.addBtnToHeader}></i>
          {
            this.renderBtnToHeader()
          }
        </div>
        <div className='template-card-container'>
          <div className='template-page-section'></div>
          <div className='template-page-section'></div>        
        </div>
        <div className='template-footer'></div>
      </div>
    )
  }
}
