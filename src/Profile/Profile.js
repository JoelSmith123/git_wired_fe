import React, { Component } from 'react';
// import 'Profile.css';

export default class Profile extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='Profile'>
        <div className='profile-select-options'>
          <h2>Pick a new wireframe!</h2>
          <button>Repo</button>
          <button>Project</button>
          <button>Type of page</button>
        </div>
        <div className='recent-projects-container'>
          <h2>Recent Projects</h2>
          <div className='recent-projects-card-container'>
            <div className='recent-projects-card'></div>
            <div className='recent-projects-card'></div>
            <div className='recent-projects-card'></div>
            <div className='recent-projects-card'></div>
          </div>
        </div>
      </div>
    )
  }
}