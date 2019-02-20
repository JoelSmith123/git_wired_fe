
import React, { Component } from 'react';

export default class Header extends Component {

  constructor(props) {
    super(props)
    this.updateState = this.props.changeLoggedInState.bind(this)
  }


 goToAuth = () => {
   window.location.href='https://git-wired-be.herokuapp.com/authenticate'
 }

 loginButton = () => {
   return (
     <input type="button"
            onClick={ () => {
              this.props.user.setGitWiredToken('123');
              this.updateState()
                // this.goToAuth()
              }
            }
            className='header-btn header-login-btn'
            value="Login"
    />
   )
 }

 logoutButton = () => {
   return (
     <input type="button"
            onClick={ () => {
              this.props.user.logout();
              this.updateState()
              }
            }
            className='header-btn header-logout-btn'
            value="Logout"
    />
   )
 }

 render() {
  return (
    <React.Fragment>
      { this.props.user.isLoggedIn() ? this.logoutButton() : this.loginButton() }
    </React.Fragment>
  )
 }

}
