import React, { Component } from 'react'
import './Welcome.css';

export default class Welcome extends Component {
  render() {
    return (
      <div className='Welcome'>
        <h2 className='welcome-content-description-title'>Welcome to GitWired!</h2>
        <div className='welcome-content-description'>
          <p>
          This is an organizational tool to setup minimal, static, black & white,
          sketch-like wireframes as a representation of your GitHub issue and
          project cards. By pairing wireframe elements to GitHub issues in a
          Repository & Project of your choosing, you can filter your features and
          GitHub cards based on completion status to see your feature progress in
          relation to all your features - the end goal!
          </p>
          <p>
          This tool is intended for small teams, who desire simple and no-fuss wireframes
          where keeping track of feature completion is the highest priority in team communication.
          </p>
          <p>
          Leave the details in your user stories and UX PDFs - get a quick summary of the project with GitWired!
          </p>
        </div>
        <h2 className='welcome-content-instructions-title'>Get Started!</h2>
        <div className='welcome-content-instructions'>
          <p>
          First - login with GitHub!
          </p>
          <p>
          Everything in this app is directly tied to the current (and future) state
          of your GitHub account. And no personal user data is stored!
          </p>
          <p>
          This app can be used with both your public & private repos, projects, and issues.
          </p>
          <p>
          Once you login, you can start a new project by selecting the collection of issues you'd
          like to work with and a template wireframe to attach them to. You're wireframe
          is already largely setup, with some customization flexibility, to get you up and running quickly!
          </p>
        </div>
      </div>
    )
  }
}
