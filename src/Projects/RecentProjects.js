
import React, { Component } from 'react';
import ProjectCard from './ProjectCard.js'

import UserSession from '../tools/UserSession.js'
const user = new UserSession


export default class RecentProjects extends Component {

  // TO DO - TEST ME
  getProjects() {
    // TO DO - Confirm ENDPOINT
    let url = 'https://git-wired-be.herokuapp.com/api/v1/projects'
    fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user.getGitWiredToken()),
    })
    .then(response => response.json() )
    .then(data     => this.renderProjectCards(data).bind(this))
    .catch(error   => console.error('Error:', error));
  }

  projects(data) {
    return data['projects']
  }

  // TO DO - TEST ME
  renderProjectCards(data){
    let projects = projects(data)
    let l = projects.length
    for(let i = 0; i < l; i++) {
      let card = projects[i]
      return <ProjectCard project={card} />
    }
  }

  // TO DO - TEST ME
  render() {
    return (
      <div className='RecentProjects'>
        { this.renderProjectCards() }
      </div>
    )
  }




}
