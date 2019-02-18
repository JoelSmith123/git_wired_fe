import React, { Component } from 'react';
import './GithubCard.css'


export default class GithubCard extends Component {


  // --- Card Title ---

  getTitle = () => {
    return this.props.card['cardTitle']
  }

  renderTitle = () => {
    return (
      <div className='CardTitle'> { this.getTitle() } </div>
    )
  }

  // --- Card Description ---

  getDescription = () => {
    return this.props.card['cardDescription']
  }

  renderDescription = () => {
    return (
      <div className='CardDescription'> { this.getDescription() } </div>
    )
  }

  // --- Card Number ---

  getCardURL = () => {
    return this.props.card['cardURL']
  }

  getNumber = () => {
    return this.props.card['cardNumber']
  }

  renderNumber = () => {
    return (
      <div className='CardNumber'>
        <a src={ this.getCardURL() }>
          #{ this.getNumber() }
        </a>
      </div>
    )
  }

  // --- Card Status ---

  getStatus = () => {
    return this.props.card['cardStatus']
  }

  renderStatus = () => {
    return (
      <div className='CardStatus'> { this.getStatus() } </div>
    )
  }

  // --- Card Column ---

  getColumn = () => {
    return this.props.card['cardColumn']
  }

  renderColumn = () => {
    return (
      <div className='CardColumn'> { this.getColumn() } </div>
    )
  }


  // --- Card Connection ---

  // TO DO - determines & Displays if card is connected to wireframe element


  // --- SHOW MORE / LESS ---

  //  TO DO - add a button to toggle display of  card description


  render() {
    return (
      <span className='GithubCard'>

        <div className='GithubCardMinimum'>
          <span className='GithubCardHeaders'>
            { this.renderTitle()       }
            { this.renderNumber()      }
          </span>
          <span className='GithubCardLabels'>
            { this.renderStatus()      }
            { this.renderColumn()      }
          </span>
        </div>

        <div className='GithubCardBody'>
          { this.renderDescription() }
        </div>

        <div>TO DO - See More / Less</div>
      </span>
    )
  }


}
