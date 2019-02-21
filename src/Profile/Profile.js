
import React, { Component } from 'react';

import RecentProjects    from '../Projects/RecentProjects.js'
import GithubRepoService from '../GithubRepos/GithubRepoService.js'

import './Profile.css';


export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userRepos: null,
      showRepoDropdown: false,
      showTemplateDropdown: false,
    }
  }


  // ---- API  ---

  repoField = () => {
    let service = new GithubRepoService
    // TO DO - Make real API call when Oauth is functional again
    // service.getGithub( this.addReposToState )
    this.addReposToState(service.stubGithub())
  }

  addReposToState = (data) => {
    let repos = data['data']['attributes']['repositories']
    this.setState( { userRepos: repos } )
    this.setState({ showRepoDropdown: true })
  }


  // ---- Form  ---

  titleField = () => {
    return (
      <input className='new-wireframe-title'
             name="wireframe-title"
             placeholder='Untitled Wireframe'
             type="text"
      />
    )
  }


  // ---- Repos  ---

  repoDropdown = () => {
    if (!this.state.userRepos) { return null }
    let repos = this.state.userRepos
    return (
      <span className='repo-dropdown-menu'>
        { repos.map( (repo, index) => ( this.repoDropdownItem(repo, index) ))}
      </span>
    )
  }

  repoDropdownItem = (repo) => {
    return (
        <div className='repo-dropdown-menu-item'
              onClick= { () => {
                this.killRepoDropdown();
                this.addRepoToState(repo)
              } }
        >{repo.name}
        </div>
      )
  }

  killRepoDropdown = () => {
    this.setState( {showRepoDropdown: false} )
  }

  addRepoToState = (repo) => {
    this.setState( { repo: repo} )
  }



  // wireframeType = () => {
  //   // includes dropdown ?
  // }
  //
  //
  // componentDidMount() {
  //
  // }

  // ---- Templates  ---
// name='card-page-template'
// name='blog-page-template'
// name='blog-post-template'

  templateDropdown = () => {
    let names = [
      'card-page-template',
      'blog-page-template',
      'blog-post-template'
    ]

    return (
      <span className='template-dropdown-menu'>
        { names.map( (name, index) => (
          <div className='template-dropdown-menu-item'
               onClick={ (name) => {
                 this.killTemplateDropdown();
                 this.addTemplateToState(name)
              } }
          >{name}
          </div>
           )
         )}
      </span>
    )
  }

  activateTemplateDropdown = () => {
    this.setState( { showTemplateDropdown: true } )
  }

  killTemplateDropdown = () => {
    this.setState( {showTemplateDropdown: false} )
  }

  addTemplateToState = (template) => {
    this.setState( { template: template} )
  }


  // ---- Render  ---

  render() {
    return (
      <div className='Profile'>
        <div className='profile-select-options'>
          <h2 className='profile-select-options-title'>Pick a new wireframe!</h2>
          <div className='profile-select-options-btn-container'>
            <button onClick={ () => { this.repoField(); } }
            >Repo</button>
            { this.state.showRepoDropdown ? ( <React.Fragment>{this.repoDropdown()}</React.Fragment>) : null }
            { this.titleField() }
            <button onClick={ () => { this.activateTemplateDropdown(); } }>Type of page</button>
            { this.state.showTemplateDropdown ? this.templateDropdown() : null }
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
