import React, { Component } from 'react';
import Header from '../Header/Header.js';
import TemplateContainer from '../TemplateContainer/TemplateContainer.js'
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      template: ''
    }
  }

  selectTemplate = (event) => {
    event.preventDefault()


  }

  changeLoggedInState = (event) => {
    event.preventDefault()

    this.setState({ loggedIn: !this.state.loggedIn })
  }

  render() {
    return (
      <div className={this.state.loggedIn ? 'App App-loggedIn' : 'App App-loggedOut'}>
        <Header loggedIn={this.state.loggedIn}
                changeLoggedInState={this.changeLoggedInState}
                selectTemplate={this.selectTemplate}
        />

        {
          this.state.loggedIn ?

            <TemplateContainer />

          :
            
          <div className='welcome-content'>
            <h2 className='welcome-content-description-title'>Description</h2>
            <p className='welcome-content-description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h2 className='welcome-content-instructions-title'>Get Started!</h2>
            <p className='welcome-content-instructions'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

        }

        <div className='footer'>
        </div>
      </div>
    );
  }
}

