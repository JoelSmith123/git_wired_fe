
import UserSession from '../tools/UserSession.js'


export default class RecentProjectsService {

  constructor() {
    this.user = new UserSession
  }

  stubRecent() {
    let stub =  {
      'data': {
        'id':         1,
        'attributes': {
          'recent': [
            {
              'projectTitle':   "Wireframe Title 1",
              'repoName':       "Repo 1",
              'updatedAt':      "Updated At",
              'createdAt':      "Created At",
            },
            {
              'projectTitle':   "Wireframe Title 2",
              'repoName':       "Repo 2",
              'updatedAt':      "Updated At",
              'createdAt':      "Created At",
            },
          ],
        }
      },
    }
    return stub
  }


  getRecents = (parseFunc) => {
    // TO DO - Confirm ENDPOINT
    // let url = 'https://git-wired-be.herokuapp.com/api/v1/projects'
    let url = 'https://git-wired-be.herokuapp.com/api/v1/wireframes'
    fetch(url, {
        method:  "GET",
        headers: { "Content-Type": "application/json", },
        body:    JSON.stringify(this.user.getGitWiredToken()),
    })
    .then(response => response.json() )
    .then(data     => parseFunc(data))
    .catch(error   => console.error('Error:', error));
  }



}
