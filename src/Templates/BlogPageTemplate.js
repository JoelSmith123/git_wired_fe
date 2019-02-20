import React, { Component } from 'react';
import './Templates.css';

export default class BlogPageTemplate extends Component {
  constructor() {
    super()

    this.state = {
      headerButtons: 0
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

  buildTemplateObject = () => {
    let templateObj = {}
    this.findElementChildrenToAddToObject(this.refs.BlogPageTemplate, templateObj)
    this.setState({ templateObj })
  }

  findElementChildrenToAddToObject = (element, templateObj) => {
    Object.values(element.children).forEach(child => {
      if (Object.values(child.classList).includes('template-header')) {
        templateObj['header'] = {
          label: 'header label',
          desc: 'header description',
          card: child.id
        }
      }

      if (Object.values(child.classList).includes('template-header-btn')) {
        if (!templateObj.headerButtons) {
          templateObj['headerButtons'] = {
            1: {
              label: 'headerButton1 label',
              desc: 'headerButton1 description',
              card: child.id
            }
          }
        } else {
          let headerButtonID = Object.keys(templateObj.headerButtons).length + 1
          templateObj.headerButtons[headerButtonID] = {
            label: `headerButton${headerButtonID} label`,
            desc: `headerButton${headerButtonID} description`,
            card: child.id
          }
        }
      }

      if (Object.values(child.classList).includes('template-page-section')) {
        if (!templateObj.pageSections) {
          templateObj['pageSections'] = {
            1: {
              label: 'pageSection1 label',
              desc: 'pageSection1 description',
              card: child.id
            }
          }
        } else {
          let pageSectionID = Object.keys(templateObj.pageSections).length + 1
          templateObj.pageSections[pageSectionID] = {
            label: `pageSection${pageSectionID} label`,
            desc: `pageSection${pageSectionID} description`,
            card: child.id
          }
        }
      }

      if (Object.values(child.classList).includes('template-footer')) {
        templateObj['footer'] = {
          label: 'footer label',
          desc: 'footer description',
          card: child.id
        } 
      }

      this.findElementChildrenToAddToObject(child, templateObj)
    })
  }


  render() {
    return (
      <div className='BlogPageTemplate' ref='BlogPageTemplate' onClick={this.buildTemplateObject}>
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
