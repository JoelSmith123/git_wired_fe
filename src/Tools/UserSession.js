export default class UserSession {
  constructor() {
    this.tokenKey = 'userToken'
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


  isLoggedIn = () => {
    return Boolean( this.getGitWiredToken() )
  }




  // Make Fetch /login call
  // receive userToken

  // TO DO - TEST ME
  //  - CONFIRM endpoint
  //  - CONFIRM RESPONSE STRUCTURE
  // loginUser() {
  //   let url = 'https://git-wired-be.herokuapp.com/login'
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data     => this.getToken(data).bind(this))
  //     .then(token    => this.setGitWiredToken(token).bind(this))
  //     .catch(error   => { console.log(error); });
  // }
  //
  // getToken(data) {
  //   let token = data[this.tokenKey]
  //   return token
  // }


}
