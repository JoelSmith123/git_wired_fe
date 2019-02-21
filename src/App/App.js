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
      loggedIn: Boolean(sessionStorage['userToken']),
      // This is hardcoded & will cause a weird bug on refresh
      viewPage: null,
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


  experience_userProfile = () => {
    return (
      this.state.loggedIn && (
        this.state.viewPage == 'profile' ||
        this.state.viewPage == null
      ))
  }

  experience_userRecents = () => {
    return ( this.state.loggedIn && this.state.viewPage == 'recent' )
  }

  experience_welcome = () => {
    return (
      !this.state.loggedIn || (
        this.state.loggedIn &&
        this.state.viewPage == 'welcome'
    ))
  }

  experience_userWireframe = () => {
    return ( this.state.loggedIn && this.state.viewPage == 'wireframe' )
  }




  selectComponentRender = () => {

    if (this.experience_welcome())       { return <Welcome /> }
    if (this.experience_userProfile())   { return <Profile /> }
    if (this.experience_userRecents())   { return <RecentProjects /> }
    if (this.experience_userWireframe()) { return <WireframeEditView template={this.state.template}/> }

  }

  changeViewPageState = (view) => {
    this.setState({ viewPage: view })
  }

  render() {
    return (
      <div className='App'>
        <Header loggedIn=            {this.state.loggedIn}
                changeLoggedInState= {this.changeLoggedInState}
                changeViewPageState= {this.changeViewPageState}
                selectTemplate=      {this.selectTemplate}
                viewProfile=         {this.viewProfile}
                user=                {this.props.user}
        />
        { this.selectComponentRender() }
        <div className='footer'>
        </div>
      </div>
    );
  }
}
