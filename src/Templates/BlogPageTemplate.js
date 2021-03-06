import React, { Component } from 'react';
import './Templates.css';

export default class BlogPageTemplate extends Component {
  constructor() {
    super()

    this.state = {
      headerButtons: 0,
      templateObj: {
        ref:           "BlogPageTemplate", 
        header:        { label: '', desc: 'longer description', card: 0 },
        pageSections: {
                         1: { label: 'label', desc: 'longer description', card: 0 },
                         2: { label: 'label', desc: 'longer description', card: 0 }                        
                      },
        footer:        { label: 'label', desc: 'longer description', card: 0 }  
      }
    }
  }

  componentDidMount = () => {
    this.buildTemplateObject()
  }

  componentDidUpdate = () => { 
    this.findElementChildrenToHide(this.refs.BlogPageTemplate)  
    this.buildTemplateObject()
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
    this.props.buildElementObjectForBackend(templateObj)
    
  }

  findElementChildrenToAddToObject = (element, templateObj) => {
    templateObj['ref'] = 'BlogPageTemplate'

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

  addFetchedTemplateObjectToWireframe = () => {
    const templateObj = this.props.fetchTemplateObjectFromBackend()

    this.setState({ templateObj })
  }

  handleChange = (event) => {
    event.preventDefault()

    // edit state
  }


  render() {
    const templateObj = this.state.templateObj
    return (
      <div className='BlogPageTemplate' ref='BlogPageTemplate'>
        <div className='template-header' id='#1'>
        <div className='template-info'>
          <form>
            <h3>#1</h3>
            <input onChange={this.handleChange} 
                   type='text' 
                   name='header.label'
                   placeholder='Header Label'
            >
            </input>
            <input onChange={this.handleChange} 
                   type='text' 
                   name='header.desc'
                   placeholder='Header Description'
            >
            </input>
          </form>
        </div>
        <div className='pseudo-btn-space'></div>
          <i className="far fa-plus-square" onClick={this.addBtnToHeader}></i>
          {
            this.renderBtnToHeader()
          }
        </div>
        <div className='template-card-container'>
          <div className='template-page-section' id='#2'>
            <div className='template-info'>
              <form>
                <h3>#2</h3>
                <input onChange={this.handleChange} 
                       type='text' 
                       name='pageSections[1].label'
                       placeholder='Page Section 1 Label'
                >
                </input>
                <input onChange={this.handleChange} 
                       type='text' 
                       name='pageSections[1].desc'
                       placeholder='Page Section 1 Description'
                >
                </input>
              </form>
            </div>
          </div>
          <div className='template-page-section' id='#3'>
            <div className='template-info'>
              <h3>#3</h3>
              <form>
                <input onChange={this.handleChange} 
                       type='text' 
                       name='pageSections[2].label'
                       placeholder='Page Section 2 Label'
                >
                </input>
                <input onChange={this.handleChange} 
                       type='text' 
                       name='pageSections[2].desc'
                       placeholder='Page Section 2 Description'
                >
                </input>
              </form>
            </div>
          </div>        
        </div>
        <div className='template-footer' id='#4'>
          <div className='template-info'>
            <form>
              <h3>#4</h3>
              <input onChange={this.handleChange} 
                     type='text' 
                     name='footer.label'
                     placeholder='Footer Label'
              >
              </input>
              <input onChange={this.handleChange} 
                     type='text' 
                     name='footer.desc'
                     placeholder='Footer Description'
              >
              </input>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
