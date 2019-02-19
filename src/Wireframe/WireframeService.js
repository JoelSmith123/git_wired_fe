import UserSession from '../Tools/UserSession.js'

export default class WireframeService {

  constructor() {
    this.user = new UserSession
  }

  stubGithub() {
    let stub =  {
      'data': {
        'id':         1,
        'attributes': {
          'repo': {
            'name': "Repo Name",
            'url':  'https://github.com/JoelSmith123/git_wired_fe',
          },
          'project': {
            'name': "Project Name",
            'url':  'https://github.com/JoelSmith123/git_wired_fe/projects/1',
          },
          'cards': [
            {
              'cardTitle':       "Card 1",
              'cardDescription': "Description 1",
              'cardURL':         "https://github.com/JoelSmith123/git_wired_fe/issues/23",
              'cardNumber':      11,
              'cardStatus':      'Open',
              'cardColumn':      'Column 1',
            },
            {
              'cardTitle':       "Card 2",
              'cardDescription': "Description 2",
              'cardURL':         "https://github.com/JoelSmith123/git_wired_fe/issues/23",
              'cardNumber':      12,
              'cardStatus':      'Open',
              'cardColumn':      'Column 2',
            },
          ],
        }
      },
    }
    return stub
  }

  getGithub = (parseFunc) => {
    // TO DO - Confirm ENDPOINT
    let id  = this.props.project_id
    let url = `https://git-wired-be.herokuapp.com/api/v1/projects/${id}/cards`
    fetch(url, {
        method:  "GET",
        headers: { "Content-Type": "application/json", },
        body:    JSON.stringify(this.user.getGitWiredToken()),
    })
    .then(response => response.json() )
    .then(data     => parseFunc(data))
    .catch(error   => console.error('Error:', error));
  }


  stubWireframe() {
    let stub = {
      'data': {
        'id':         1,
        'attributes': {
          'title':        "Wireframe Title",
          'updated':      "Updated At",
          'created':      "Created At",
          'templateData': "{'Something': 1, 'Something': 2}",
        },
      },
    }
    return stub
  }

  getWireframe = (parseFunc) => {
    // TO DO - Confirm ENDPOINT
    let id  = this.props.wireframe_id
    let url = `https://git-wired-be.herokuapp.com/api/v1/wireframes/${id}`
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
