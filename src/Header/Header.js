import React, { Component } from 'react';
import './Header.css';

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

  render() {
    if (this.props.loggedIn) {
      return (
        <div className='Header'>
          <span className='header-btn-container'>
            <button className='header-btn header-home-btn'>Git Wired</button>
            <button className='header-btn header-help-btn'>Help</button>
          </span>
          <span className='header-btn-container'>
            <div className='header-recent-projects-btn-dropdown-container'>
              <button className='header-btn header-recent-projects-btn' onClick={this.toggleDropdown}>Recent Projects</button>
              {
                this.state.showDropdown ? (
                  <div className='header-recent-projects-btn-dropdown'>
                    <button className='header-recent-projects-btn-dropdown-btn' 
                            name='card-page-template'
                            onClick={(event) => this.props.selectTemplate(event, event.target.name)}
                    >card page template
                    </button>
                    <button className='header-recent-projects-btn-dropdown-btn' 
                            name='blog page template'
                            onClick={(event) => this.props.selectTemplate(event, event.target.name)}
                    >blog page template
                    </button>
                    <button className='header-recent-projects-btn-dropdown-btn' 
                            name='blog-post-template'
                            onClick={(event) => this.props.selectTemplate(event, event.target.name)}
                    >blog post template
                    </button>
                  </div>
                ) : (
                  null
                )
              }
            </div>
            <button className='header-btn header-profile-btn'>Profile</button>            
            <button className='header-btn header-logout-btn' onClick={this.props.changeLoggedInState}>Logout</button>
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
            <button className='header-btn header-login-btn' onClick={this.props.changeLoggedInState}>login</button>
            <button className='header-btn header-register-btn'>register</button>
          </span>
        </div>
      )      
    }
  }
}