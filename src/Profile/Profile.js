
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

  // {
  //   this.state.showRepoDropdown ? (
  //     <div className='header-recent-projects-btn-dropdown'>
  //       <button className='header-recent-projects-btn-dropdown-btn'
  //               name='card-page-template'
  //               onClick={(event) => this.handleTemplateSelection(event, event.target.name)}
  //       >card page template
  //       </button>
  //       <button className='header-recent-projects-btn-dropdown-btn'
  //               name='blog-page-template'
  //               onClick={(event) => this.handleTemplateSelection(event, event.target.name)}
  //       >blog page template
  //       </button>
  //       <button className='header-recent-projects-btn-dropdown-btn'
  //               name='blog-post-template'
  //               onClick={(event) => this.handleTemplateSelection(event, event.target.name)}
  //       >blog post template
  //       </button>
  //     </div>
  //   ) : (
  //     null
  //   )
  // }

// 'card-page-template'
// 'blog-page-template'
// 'blog-post-template'


  repoDropdown = () => {
    if (!this.state.userRepos) { return null }
    let repos = this.state.userRepos
    return (
      <span className='repo-dropdown-menu'>
        { repos.map( (repo, index) => ( this.repoDropdownItem(repo, index) ))}
      </span>
    )
  }

  // repo_id={   repo.id }
  // repo_name={ repo.name}
  // github_id={ repo.github_id}

  repoDropdownItem = (repo) => {
    return (
        <div className='repo-dropdown-menu-item'
              onClick= { () => {
                this.killRepoDropdown();
                this.addRepoSelection(repo)
              } }
        >{repo.name}
        </div>
      )
  }

  killRepoDropdown = () => {
    this.setState( {showRepoDropdown: false} )
  }

  killTemplateDropdown = () => {
    this.setState( {showTemplateDropdown: false} )
  }

  addRepoToState = (repo) => {
    this.setState( { repo: repo} )
  }

  addTemplateToState = (template) => {
    this.setState( { template: template} )
  }

  // wireframeType = () => {
  //   // includes dropdown ?
  // }
  //
  //
  // componentDidMount() {
  //
  // }



  render() {
    return (
      <div className='Profile'>
        <div className='profile-select-options'>
          <h2 className='profile-select-options-title'>Pick a new wireframe!</h2>
          <div className='profile-select-options-btn-container'>
            <button onClick={ () => {
              this.repoField();
            }
           }
            >Repo</button>
            {
              this.state.showRepoDropdown ? (
              <div>
                {this.repoDropdown() }
              </div>)
                : null
              }
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
