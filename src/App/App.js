import React, { Component } from 'react';

import './App.css';

import Header             from '../Header/Header.js';
import Welcome            from '../Welcome/Welcome.js'
import Profile            from '../Profile/Profile.js';
import RecentProjects     from '../Projects/RecentProjects.js'
import WireframeEditView  from '../Wireframe/WireframeEditView.js'
import TemplateContainer  from '../TemplateContainer/TemplateContainer.js'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: Boolean(sessionStorage['userToken']),
      // This is hardcoded & will cause a weird bug on refresh
      viewPage: null,
      // TO DO - can we get rid of these last 2?
      template: '',
      viewProfile: false
    }
  }


  // ----- Session ------

  componentDidMount() {
    if (Boolean(this.props.user.getURLToken())) {
      this.props.user.login()
      this.setState({ loggedIn: this.props.user.isLoggedIn() })
    }
  }

  changeLoggedInState = (event) => {
    if (event) {event.preventDefault()}

    this.setState({ loggedIn: this.props.user.isLoggedIn() })
  }



  // ----- Can Remove ? ------

  // TO DO - can we get rid of this or move it?
  selectTemplate = (event, template) => {
    event.preventDefault()

    this.setState({ template })
  }

  // TO DO - can we get rid of this?
  viewProfile = (event) => {
    event.preventDefault()

    this.setState({
      viewProfile: true,
      template: ''
    })
  }

// ----------------------------



// ----- Experiences / Views ------

  experience_userProfile = () => {
    let loggedIn    = this.state.loggedIn
    let profile     = (this.state.viewPage == 'profile')
    let defaultView = (this.state.viewPage == null)

    return ( loggedIn && ( profile || defaultView ) )
  }

  experience_userRecents = () => {
    let loggedIn = this.state.loggedIn
    let recent   = this.state.viewPage == 'recent'

    return ( loggedIn && recent )
  }

  experience_welcome = () => {
    let loggedIn    = this.state.loggedIn
    let notLoggedIn = !loggedIn
    let welcome     = this.state.viewPage == 'welcome'

    return ( notLoggedIn || ( loggedIn && welcome ) )
  }

  experience_userWireframe = () => {
    let loggedIn  = this.state.loggedIn
    let wireframe = this.state.viewPage == 'wireframe'

    return ( loggedIn && wireframe )
  }

  selectComponentRender = () => {

    if (this.experience_welcome())       { return <Welcome /> }
    if (this.experience_userProfile())   { return <Profile        changeViewPageState={this.changeViewPageState} /> }
    if (this.experience_userRecents())   { return <RecentProjects changeViewPageState={this.changeViewPageState} /> }
    if (this.experience_userWireframe()) { return <WireframeEditView template={this.state.template}/> }

  }

  changeViewPageState = (view) => {
    this.setState({ viewPage: view })
  }



  // -------- Render --------

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
