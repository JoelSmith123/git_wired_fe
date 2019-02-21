import React, { Component } from 'react';
import './ProjectCard.css'


export default class ProjectCard extends Component {

  // --- Project Name ---

  getTitle() {
    return this.props.project['projectTitle']
  }

  renderTitle(){
    return (
      <div className='ProjectTitle'>{ this.getTitle() }</div>
    )
  }

  // --- Repo Name ---

  getRepo() {
    return this.props.project['repoName']
  }

  renderRepo(){
    return (
      <div className='RepoName'> { this.getRepo() } </div>
    )
  }

  // --- Updated ---

  getUpdated() {
    return this.props.project['updatedAt']
  }

  renderUpdated(){
    return (
      <div className='Updated'> { this.getUpdated() } </div>
    )
  }

  // --- Created ---

  getCreated() {
    return this.props.project['createdAt']
  }

  renderCreated(){
    return (
      <div className='Created'> { this.getCreated() } </div>
    )
  }


  // --- Image ---

  // TO DO - Display image (not MVP)



  render() {
    return (
      <span className='ProjectCard'
            onClick= { () => { this.props.changeViewPageState('wireframe')  }  }>
        { this.renderTitle()   }
        { this.renderRepo()    }
        { this.renderUpdated() }
        { this.renderCreated() }
      </span>
    )
  }


}
