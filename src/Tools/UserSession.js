



export default class UserSession {

  constructor(){
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

  // Make Fetch /login call
  // receive userToken


  // TO DO - TEST ME
  //  - CONFIRM endpoint
  //  - CONFIRM RESPONSE STRUCTURE
  loginUser() {
    url = 'https://git-wired-be.herokuapp.com/login'
    fetch(url)
      .then(response => response.json())
      .then(data     => getToken(data))
      .then(token    => setGitWiredToken(token))
      .catch(error   => { console.log(error); });
  }

  getToken(data) {
    let token = data[this.tokenKey]
    return token
  }


}
