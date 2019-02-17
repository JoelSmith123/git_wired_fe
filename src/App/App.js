import React, { Component } from 'react';

import './App.css';

import Header from '../Header/Header.js';
import TemplateContainer from '../TemplateContainer/TemplateContainer.js'
// import RecentProjects from '../Projects/RecentProjects.js'

// ---- TO DO - DELETE THIS PORTION ----
// Only for demonstrating functionality while BE API is not built
import ProjectCard from '../Projects/ProjectCard.js'
// --------------------------------------
import Profile from '../Profile/Profile.js';
import Welcome from '../Welcome/Welcome.js'
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      template: '',
      // This attribute is temporary until API is functional
      stubCard: {
            'projectTitle': 'Title1',
            'repoName':     'RepoName1',
            'createdAt':    'Created1',
            'updatedAt':    'Updated1',
        },
      viewProfile: false
    }
  }

  toggleAppBackground = () => {
    if (this.state.template === '') {
      return 'App-white-background'
    } else {
      return 'App-grey-background'
    }
  }

  selectTemplate = (event, template) => {
    event.preventDefault()

    this.setState({ template })
  }

  changeLoggedInState = (event) => {
    event.preventDefault()

    this.setState({ loggedIn: !this.state.loggedIn })
  }

  viewProfile = (event) => {
    event.preventDefault()

    this.setState({ 
      viewProfile: true,
      template: '' 
    })
  }

  selectComponentRender = () => {
    if (this.state.loggedIn) {
      if (this.state.template !== '') {
        return <TemplateContainer currentTemplate={this.state.template}/>
      } else {
        // return <ProjectCard project={this.state.stubCard} />
        return <Profile />        
      }
    } else {
      return <Welcome />
    }
  }

  render() {
    return (
      <div className={this.toggleAppBackground()}>
        <Header loggedIn={this.state.loggedIn}
                changeLoggedInState={this.changeLoggedInState}
                selectTemplate={this.selectTemplate}
                viewProfile={this.viewProfile}
        />
        { this.selectComponentRender() }
        <div className='footer'>
        </div>
      </div>
    );
  }
}
