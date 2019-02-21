
import React, { Component } from 'react';

import RecentProjects from '../Projects/RecentProjects.js'

import './Profile.css';

export default class Profile extends Component {

  constructor() {
    super();
  }



  titleField = () => {
    return (
      <input className='new-wireframe-title'
             name="wireframe-title"
             placeholder='Untitled Wireframe'
             type="text"
      />
    )
  }

  repoField = () => {

  }

  repoDropdown = () => {

  }

  wireframeType = () => {
    // includes dropdown ?
  }





  render() {
    return (
      <div className='Profile'>
        <div className='profile-select-options'>
          <h2 className='profile-select-options-title'>Pick a new wireframe!</h2>
          <div className='profile-select-options-btn-container'>
            <button>Repo</button>
            { this.titleField() }
            <button>Type of page</button>
            <button>Start</button>
          </div>
        </div>
        <div className='recent-projects-container'>
          <h2 className='recent-projects-container-title'>Recent Projects</h2>
          <div className='recent-projects-card-container'>
          {  <RecentProjects changeViewPageState={this.props.changeViewPageState}/> }
          </div>
        </div>
      </div>
    )
  }
}
