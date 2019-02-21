import React, { Component } from 'react';
import RecentProjectsService from './RecentProjectsService.js'
import ProjectCard from './ProjectCard.js'
import UserSession from '../Tools/UserSession.js'


export default class RecentProjects extends Component {

  // constructor(props) {
  //   super(props)
  //   this.chan = this.props.changeLoggedInState.bind(this)
  // }


  componentDidMount() {
    const recents = new RecentProjectsService
    // ------- API call HERE ----------
    // TO DO - add this when API is functional
    // frame.getRecents( parseFunc = (data) => { this.parseRecentProjects(data) })
    this.parseRecentProjects( recents.stubRecent() )
  }

  parseRecentProjects = (data) => {
    let cards = data['data']['attributes']['recent']
    this.setState( { cards: cards } )
  }


  // TO DO - TEST ME
  renderProjectCards(data){
    let cards = this.state.cards
    return cards.map( (card) => <ProjectCard project={card} changeViewPageState={this.props.changeViewPageState} /> )
  }

  // TO DO - TEST ME
  render() {
    if (this.state == null || undefined) { return null }
    return (
      <div className='RecentProjects'>
        { this.renderProjectCards() }
      </div>
    )
  }
}
