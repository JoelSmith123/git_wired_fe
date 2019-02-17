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

    this.setState({ viewProfile: true })
  }

  render() {
    return (
      <div className={this.state.loggedIn ? 'App App-loggedIn' : 'App App-loggedOut'}>
        <Header loggedIn={this.state.loggedIn}
                changeLoggedInState={this.changeLoggedInState}
                selectTemplate={this.selectTemplate}
                viewProfile={this.viewProfile}
        />
        {
          this.state.loggedIn ?

            // TO DO - We want to render Recent Projects (the collection of project cards)
            //         when the BE endpoint is functional
            // <RecentProjects />
            //  use this to stub a card
            <ProjectCard project={this.state.stubCard} />

            // TO DO - This should only be available on a project page
            // <TemplateContainer currentTemplate={this.state.template}/>

          :

          <Welcome />

        }

        <div className='footer'>
        </div>
      </div>
    );
  }
}
