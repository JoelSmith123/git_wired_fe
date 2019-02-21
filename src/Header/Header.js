import React, { Component } from 'react';
import './Header.css';

import SessionButton from './SessionButton.js'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      showDropdown: false
    }
  }

  toggleDropdown = (event) => {
    event.preventDefault()

    this.setState({ showDropdown: !this.state.showDropdown })
  }

  handleTemplateSelection = (event, templateName) => {
    event.preventDefault()

    this.setState({ showDropdown: false })
    this.props.selectTemplate(event, templateName)
  }


  render() {
    if (this.props.loggedIn) {
      return (
        <div className='Header'>
          <span className='header-btn-container'>
            <button className='header-btn header-home-btn'
                    onClick = { () => { this.props.changeViewPageState('welcome') } }
            >Git Wired</button>
            <input type="button"
                   onClick={ () => { window.location.href='https://github.com/JoelSmith123/git_wired_fe/blob/master/README.md' } }
                   className='header-btn header-help-btn'
                   value="Help"
            />
          </span>
          <span className='header-btn-container'>
            <div className='header-recent-projects-btn-dropdown-container'>
              <button className='header-btn header-recent-projects-btn'
              // onClick={this.toggleDropdown}
                      onClick = { () => { this.props.changeViewPageState('recent') } }
              >Recent Projects</button>
              {
                this.state.showDropdown ? (
                  <div className='header-recent-projects-btn-dropdown'>
                    <button className='header-recent-projects-btn-dropdown-btn'
                            name='card-page-template'
                            onClick={(event) => this.handleTemplateSelection(event, event.target.name)}
                    >card page template
                    </button>
                    <button className='header-recent-projects-btn-dropdown-btn'
                            name='blog-page-template'
                            onClick={(event) => this.handleTemplateSelection(event, event.target.name)}
                    >blog page template
                    </button>
                    <button className='header-recent-projects-btn-dropdown-btn'
                            name='blog-post-template'
                            onClick={(event) => this.handleTemplateSelection(event, event.target.name)}
                    >blog post template
                    </button>
                  </div>
                ) : (
                  null
                )
              }
            </div>
            <button className='header-btn header-profile-btn'
                    // onClick={this.props.viewProfile}
                    onClick = { () => { this.props.changeViewPageState('profile') } }
            >Profile
            </button>
            <SessionButton user={this.props.user} changeLoggedInState={this.props.changeLoggedInState}/>
          </span>
        </div>
      )
    } else {
      return (
        <div className='Header'>
          <button className='header-btn header-home-btn'>Git Wired</button>
          <span className='header-title-container'>
            <h1 className='header-main-title'>Welcome!</h1>
            <h3 className='header-sub-title'><a>Login</a> to get started!</h3>
          </span>
          <span className='header-btn-container'>
            <SessionButton user={this.props.user} changeLoggedInState={this.props.changeLoggedInState}/>
          </span>
        </div>
      )
    }
  }
}
