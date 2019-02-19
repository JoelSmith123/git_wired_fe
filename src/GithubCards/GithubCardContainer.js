
import React, { Component } from 'react';

import './GithubCardContainer.css'

import GithubCard from './GithubCard.js'



export default class GithubCardContainer extends Component {


  // TO DO - TEST ME
  renderGithubCards = () => {
    let cards = this.props.cards
    return cards.map( (card, index) => <GithubCard card={card} key={index} /> )
  }

  // TO DO - TEST ME
  render() {
    return (
      <div className='GithubCardsContainer'>
        <div className='GithubTitle'>Github Issues</div>
        <div className='GithubCards'>
          { this.renderGithubCards() }
        </div>
      </div>
    )
  }


}
