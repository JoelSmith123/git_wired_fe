



export default class UserSession {

  constructor(){
    this.tokenKey = 'gitWiredToken'
  }

  setGitWiredToken(token) {
    sessionStorage.setItem(this.tokenKey, token);
  }

  getGitWiredToken() {
    return sessionStorage.getItem(this.tokenKey);
  }

  logout() {
    sessionStorage.removeItem(this.tokenKey);
  }


  



}
