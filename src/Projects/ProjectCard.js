import React, { Component } from 'react';


export default class ProjectCard extends Component {

  // --- Project Name ---

  getTitle() {
    return this.props.project['projectTitle']
  }

  renderTitle(){
    return (
      <div className='ProjectTitle'> { getTitle() } </div>
    )
  }

  // --- Repo Name ---

  getRepo() {
    return this.props.project['repoName']
  }

  renderRepo(){
    return (
      <div className='RepoName'> { getRepo() } </div>
    )
  }

  // --- Updated ---

  getUpdated() {
    return this.props.project['updatedAt']
  }

  renderUpdated(){
    return (
      <div className='Updated'> { getUpdated() } </div>
    )
  }

  // --- Created ---

  getCreated() {
    return this.props.project['createdAt']
  }

  renderCreated(){
    return (
      <div className='Created'> { getCreated() } </div>
    )
  }


  // --- Image ---

  // TO DO - Display image (not MVP)



  render() {
    <span class='ProjectCard'>
      { renderTitle()   }
      { renderRepo()    }
      { renderUpdated() }
      { renderCreated() }
    <span>
  }


}
