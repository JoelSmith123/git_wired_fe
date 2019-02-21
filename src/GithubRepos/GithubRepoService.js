
import UserSession from '../Tools/UserSession.js'


export default class GithubRepoService {

  constructor() {
    // TO DO - this user can be passed down from App
    this.user = new UserSession
  }


  stubGithub = () => {
  return (
      {
        "data": {
          "id": "hbellows",
          "type": "repository",
          "attributes": {
            "repositories": [
              {
                "id": 1,
                "name": "git_wired_be",
                "github_id": "170214553"
              },
              {
                "id": 2,
                "name": "Brownfield-of-Dreams",
                "github_id": "170607745"
              },
              {
                "id": 3,
                "name": "quantifiedSelfApi",
                "github_id": "168269382"
              }
            ]
          }
        }
      }
    )
  }


  // Note - No Repos exist in DB until GET Repos is called in new wireframe

  getGithub = (parseFunc) => {
    let content = JSON.stringify( {'token': this.user.getGitWiredToken()} )
    let verb    = 'GET'
    let url     = `https://git-wired-be.herokuapp.com/api/v1/repositories`
    let body    = new Blob([ content ], {type : 'application/json'})
    var data
    let req = new XMLHttpRequest()
    req.open(verb, url)
    req.setRequestHeader("CONTENT_TYPE", "application/json")
    req.setRequestHeader("ACCEPT",        "application/json")
    req.onload = function() {
      let stat = this.status
      let valid = ( stat >= 200 && stat < 300 )
      if( valid ) {
        data = JSON.parse(this.responseText)
        parseFunc(data)
      }
      else { console.log(this.status) }
    }
    req.send( body )
  }


}
