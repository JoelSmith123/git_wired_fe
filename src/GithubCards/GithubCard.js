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

  getNumber = () => {
    return this.props.card['cardNumber']
  }

  renderNumber = () => {
    return (
      <div className='CardNumber'> { this.getNumber() } </div>
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



  render() {
    return (
      <span className='GithubCard'>
        { this.renderTitle()       }
        { this.renderDescription() }
        { this.renderNumber()      }
        { this.renderStatus()      }
        { this.renderColumn()      }
      </span>
    )
  }


}
