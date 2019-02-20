import React, { Component } from 'react';
import TemplateContainer   from '../TemplateContainer/TemplateContainer.js'
import GithubCardContainer from '../GithubCards/GithubCardContainer.js'
import WireframeService    from './WireframeService.js'
import './WireframeEditView.css'


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
      repo,
      project,
      cards
    } )
  }

  filterCardsAndTemplateElementsByStatus = (status) => {
    if (status) {
      const filteredCards = this.state.cards.filter(card => card.cardStatus === status)

      this.setState({ filteredCards })      
    } else {
      this.setState({ filteredCards: null })
    }
  }

  getFilteredCardIdsToFilterElements = () => {
    if (this.state.filteredCards) {
      return this.state.filteredCards.map(card => card.cardNumber)      
    } else {
      return null
    }
  }

  buildElementObjectForBackend = (templateObj) => {
    console.log(templateObj)
    // this.postTemplateToBackend(JSON.stringify(templateObj))
  }

  // postTemplateToBackend = async (data) => {
  //   const url = ''
  //   try {
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data)
  //     })      
  //   } catch(error) {
  //     console.log(error)
  //   }
  // }

  fetchTemplateObjectFromBackend = async () => {
    const url = ''
    try {
      const response = await fetch(url)
      const fetchedTemplateObj = response.json()
      return fetchedTemplateObj
    } catch(error) {
      console.log(error)
    }
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
          <button>LOAD WIREFRAME TEST</button>
          <span className='GithubLinks'>
            <span className='RepoName'>
              <a href={this.state.repo['url']}>{ this.state.repo['name'] }</a>
            </span>
            <span className='ProjectName'>
              <a href={this.state.project['url']}>{ this.state.project['name'] }</a>
            </span>
          </span>
        </div>

        <div className='WireframeEditContent'>
          <TemplateContainer currentTemplate={this.props.template}
                             cardIds={this.getFilteredCardIdsToFilterElements()}
                             buildElementObjectForBackend={this.buildElementObjectForBackend}
           />
          <GithubCardContainer cards={ this.state.filteredCards ?  this.state.filteredCards : this.state.cards } 
                               filterCardsAndTemplateElementsByStatus={this.filterCardsAndTemplateElementsByStatus}
          />
        </div>

      </div>
    )
  }





}
