import React, { Component } from 'react';

import './App.css';

import Header             from '../Header/Header.js';
import Welcome            from '../Welcome/Welcome.js'
import Profile            from '../Profile/Profile.js';
import RecentProjects     from '../Projects/RecentProjects.js'
import WireframeEditView  from '../Wireframe/WireframeEditView.js'
import TemplateContainer  from '../TemplateContainer/TemplateContainer.js'

import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      template: '',
      viewProfile: false
    }
  }

  componentDidMount() {
    if (Boolean(this.props.user.getURLToken())) {
      this.props.user.login()
      this.setState({ loggedIn: this.props.user.isLoggedIn() })
    }
  }

  selectTemplate = (event, template) => {
    event.preventDefault()

    this.setState({ template })
  }

  changeLoggedInState = (event) => {
    if (event) {event.preventDefault()}

    this.setState({ loggedIn: this.props.user.isLoggedIn() })
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
      // return <Profile />
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
                user={this.props.user}
        />
        { this.selectComponentRender() }
        <div className='footer'>
        </div>
      </div>
    );
  }
}
