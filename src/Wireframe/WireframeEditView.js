
import React, { Component } from 'react';

import TemplateContainer   from '../TemplateContainer/TemplateContainer.js'
import GithubCardContainer from '../GithubCards/GithubCardContainer.js'
import WireframeService    from './WireframeService.js'


export default class WireframeEditView extends Component {


  componentDidMount() {
    const frame = new WireframeService
    // ------- API call HERE ----------
    // TO DO - add this when API is functional
    // frame.getGithub( parseFunc = (data) => { this.parseGithubResponse(data) })
    this.parseGithubResponse( frame.stubGithub() )
    // ------- API call HERE ----------
    // TO DO - add this when API is functional
    // frame.getWireframe( parseFunc = (data) => { this.parseWireframeResponse(data) })
    this.parseWireframeResponse( frame.stubWireframe() )
  }


  //  --- Make Wireframe API req ---

  parseWireframeResponse = (data) => {
    let info    = data['data']['attributes']
    let title   = info['title']
    let updated = info['updated']
    let created = info['created']
    this.setState( {
      wireframeTitle:   title,
      wireframeUpdated: updated,
      wireframeCreated: created
    } )
  }

  //  --- Make GITHUB API req ---

  parseGithubResponse = (data) => {
    let info    = data['data']['attributes']
    let repo    = info['repo']
    let project = info['project']
    let cards   = info['cards']
    this.setState( {
      repo:    repo,
      project: project,
      cards:   cards
    } )
  }


  render() {
    if (this.state == null || undefined) { return null }
    return (
      <div className='WireframeEditView'>
        <div className='WireframeHeaderContainer'>

          <span className='WireframeTitle'>{ this.state.wireframeTitle }</span>
          <span className='Timestamps'>
            <span className='UpdatedTimestamp'>{ this.state.wireframeUpdated }</span>
            <span className='CreatedTimestamp'>{ this.state.wireframeCreated }</span>
          </span>

          <span className='Timestamps'>
            <span className='RepoName'>
              <a href={this.state.repo['url']}>{ this.state.repo['name'] }</a>
            </span>
            <span className='ProjectName'>
              <a href={this.state.project['url']}>{ this.state.project['name'] }</a>
            </span>
          </span>

        </div>

        <div className='WireframeEditContent'>
          <TemplateContainer currentTemplate={this.props.template} />
          <GithubCardContainer cards={ this.state.cards } />
        </div>

      </div>
    )
  }





}
