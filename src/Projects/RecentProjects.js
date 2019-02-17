
import React, { Component } from 'react';
import ProjectCard from './ProjectCard.js'



export default class RecentProjects extends Component {


  projects() {
    return this.props.projects
  }

  renderProjectCards(){
    let projects = projects()
    let l = projects.length
    for(let i = 0; i < l; i++) {
      let card = projects[i]
      return <ProjectCard project={card} />
    }
  }

  renderProjectCard(project) {

  }

  render() {
    <div className='RecentProjects'>
      { renderProjectCard() }
    </div>
  }




}
