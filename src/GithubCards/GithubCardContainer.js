
import React, { Component } from 'react';

import './GithubCardContainer.css'

import GithubCard from './GithubCard.js'



export default class GithubCardContainer extends Component {
  constructor() {
    super();
    this.state = {
      showDropdown: false
    }
  }

  // TO DO - TEST ME
  renderGithubCards = () => {
    let cards = this.props.cards
    return cards.map( (card, index) => <GithubCard card={card} key={index} /> )
  }

  toggleDropdown = (event) => {
    event.preventDefault()

    this.setState({ showDropdown: !this.state.showDropdown })
  }

  cardsStatusSelect = (event, statusName) => {
    event.preventDefault()


  }

  // TO DO - TEST ME
  render() {
    return (
      <div className='github-cards-container'>
        <div className='github-cards-container-header'>
          <div className='github-title'>Github Issues</div>
          <button onClick={this.toggleDropdown}>status</button>
          {
            this.state.showDropdown ? (
              <div className='github-cards-container-status-dropdown'>
                <button className='github-cards-container-status-dropdown'
                        onClick={(event) => this.cardsStatusSelect(event, event.target.name)}
                >Open</button>
                <button className='github-cards-container-status-dropdown'
                        onClick={(event) => this.cardsStatusSelect(event, event.target.name)}
                >Closed</button>
                <button className='github-cards-container-status-dropdown'
                        onClick={(event) => this.cardsStatusSelect(event, event.target.name)}
                >In-Progress</button>
                <button className='github-cards-container-status-dropdown'
                        onClick={(event) => this.cardsStatusSelect(event, event.target.name)}                        
                >To Do</button>
              </div>
            ) : (
              null
            )
          }
        </div>
        <div className='github-cards'>
          { this.renderGithubCards() }
        </div>
      </div>
    )
  }


}
