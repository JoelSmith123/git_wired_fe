
import React, { Component } from 'react';
import GithubCard from './GithubCard.js'

import UserSession from '../tools/UserSession.js'


export default class GithubCardContainer {

  constructor = () => {
    this.user = new UserSession
  }

  // TO DO - we need a way to pass the project ID to this view and the fetch call

  getProjects() {
    // TO DO - Confirm ENDPOINT
    let url = 'https://git-wired-be.herokuapp.com/api/v1/projects/_____/cards'
    fetch(url, {
        method:  "GET",
        headers: { "Content-Type": "application/json", },
        body:    JSON.stringify(this.user.getGitWiredToken()),
    })
    .then(response => response.json() )
    .then(data     => this.renderGithubCards(data).bind(this))
    .catch(error   => console.error('Error:', error));
  }

  cards = (data) => {
    return data['cards']
  }


  // TO DO - TEST ME
  renderGithubCards = (data) => {
    let cards = this.cards(data)
    let l = cards.length
    for(let i = 0; i < l; i++) {
      let card = cards[i]
      return <GithubCard card={ card } />
    }
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
