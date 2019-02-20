import React, { Component } from 'react';
import './Templates.css';

export default class BlogPageTemplate extends Component {
  constructor() {
    super()

    this.state = {
      headerButtons: 0,
      templateObj: {}
    }
  }

  componentDidUpdate = () => { 
    this.findElementChildrenToHide(this.refs.BlogPageTemplate)  
    this.props.buildElementObjectForBackend(this.state.templateObj)
  }

  findElementChildrenToHide = (element) => {
    if (element.children) {
      Object.values(element.children).forEach(child => {
        if (this.props.cardIds) {
          if (this.props.cardIds.includes(parseInt(child.id))) {
            child.classList.add('hideTemplateElement')
          } else {
            child.classList.remove('hideTemplateElement')            
          }            
        } else {
          child.classList.remove('hideTemplateElement')                      
        }

        this.findElementChildrenToHide(child)
      })
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


  // {
  //   ref:           "BlogPageTemplate", 
  //   header:        { label: 'label', desc: 'longer description', card: 0 },
  //   headerButton1: { label: 'label', desc: 'longer description', card: 0 },
  //   headerButton2: { label: 'label', desc: 'longer description', card: 0 },
  //   headerButton3: { label: 'label', desc: 'longer description', card: 0 },
  //   pageSection1:  { label: 'label', desc: 'longer description', card: 0 },  
  //   pageSection2:  { label: 'label', desc: 'longer description', card: 0 },  
  //   footer:        { label: 'label', desc: 'longer description', card: 0 }  
  // }


  render() {
    return (
      <div className='BlogPageTemplate' ref='BlogPageTemplate'>
        <div className='template-header' id='11'>
        <div className='pseudo-btn-space'></div>
          <i className="far fa-plus-square" onClick={this.addBtnToHeader}></i>
          {
            this.renderBtnToHeader()
          }
        </div>
        <div className='template-card-container'>
          <div className='template-page-section' id='12'></div>
          <div className='template-page-section' id='13'></div>        
        </div>
        <div className='template-footer' id='14'></div>
      </div>
    )
  }
}
