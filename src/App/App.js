import React, { Component } from 'react';

import './App.css';

import Header from '../Header/Header.js';
import TemplateContainer from '../TemplateContainer/TemplateContainer.js'
// import RecentProjects from '../Projects/RecentProjects.js'

// ---- TO DO - DELETE THIS PORTION ----
// Only for demonstrating functionality while BE API is not built
// import ProjectCard        from '../Projects/ProjectCard.js'
// import GithubCard         from '../GithubCards/GithubCard.js'
import RecentProjects     from '../Projects/RecentProjects.js'
import WireframeEditView  from '../Wireframe/WireframeEditView.js'
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
      // stubCard: {
      //       'projectTitle': 'Title1',
      //       'repoName':     'RepoName1',
      //       'createdAt':    'Created1',
      //       'updatedAt':    'Updated1',
      //   },
      //   stubGithubCard: {
      //     'cardTitle':       'This is the title',
      //     'cardDescription': 'This is lots of long text from the body of my issue',
      //     'cardNumber':       13,
      //     'cardURL':         'https://github.com/JoelSmith123/git_wired_fe/issues/23',
      //     'cardStatus':      'Open',
      //     'cardColumn':      'Custom Column',
      //   },
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

    this.setState({
      viewProfile: true,
      template: ''
    })
  }

  selectComponentRender = () => {
    if (this.state.loggedIn) {
      return <WireframeEditView template={this.state.template}/>
    } else {
      return <Welcome />
    }
  }

  render() {
    return (
      <div className='App'>
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
