export default class UserSession {
  constructor() {
    this.tokenKey = 'userToken'
  }

  setGitWiredToken(token) {
    if (token) {sessionStorage.setItem(this.tokenKey, token)};
  }

  getGitWiredToken() {
    return sessionStorage.getItem(this.tokenKey);
  }

  logout() {
    sessionStorage.removeItem(this.tokenKey);
  }


  isLoggedIn = () => {
    return Boolean( this.getGitWiredToken() )
  }

  getURLToken = () => {
    let url = window.location.href
    let arr = url.split('=')
    return arr.length >= 2 ? arr.pop : null
  }

  login = () => {
    let token = this.getURLToken()
    this.setGitWiredToken(token)
  }


}
