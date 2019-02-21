import UserSession from '../Tools/UserSession.js'

export default class WireframeService {

  constructor() {
    // TO DO - this user can be passed down from App
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
              'cardStatus':      'open',
              'cardColumn':      'Column 1',
            },
            {
              'cardTitle':       "Card 2",
              'cardDescription': "Description 2",
              'cardURL':         "https://github.com/JoelSmith123/git_wired_fe/issues/23",
              'cardNumber':      12,
              'cardStatus':      'closed',
              'cardColumn':      'Column 2',
            },
            {
              'cardTitle':       "Card 3",
              'cardDescription': "Description 3",
              'cardURL':         "https://github.com/JoelSmith123/git_wired_fe/issues/23",
              'cardNumber':      13,
              'cardStatus':      'in-progress',
              'cardColumn':      'Column 3',
            },
            {
              'cardTitle':       "Card 4",
              'cardDescription': "Description 4",
              'cardURL':         "https://github.com/JoelSmith123/git_wired_fe/issues/23",
              'cardNumber':      14,
              'cardStatus':      'to-do',
              'cardColumn':      'Column 4',
            },
            {
              'cardTitle':       "Card 5",
              'cardDescription': "Description 5",
              'cardURL':         "https://github.com/JoelSmith123/git_wired_fe/issues/23",
              'cardNumber':      15,
              'cardStatus':      'open',
              'cardColumn':      'Column 5',
            },
            {
              'cardTitle':       "Card 6",
              'cardDescription': "Description 6",
              'cardURL':         "https://github.com/JoelSmith123/git_wired_fe/issues/23",
              'cardNumber':      16,
              'cardStatus':      'closed',
              'cardColumn':      'Column 6',
            },
            {
              'cardTitle':       "Card 7",
              'cardDescription': "Description 7",
              'cardURL':         "https://github.com/JoelSmith123/git_wired_fe/issues/23",
              'cardNumber':      17,
              'cardStatus':      'in-progress',
              'cardColumn':      'Column 7',
            },
            {
              'cardTitle':       "Card 8",
              'cardDescription': "Description 8",
              'cardURL':         "https://github.com/JoelSmith123/git_wired_fe/issues/23",
              'cardNumber':      18,
              'cardStatus':      'to-do',
              'cardColumn':      'Column 8',
            },
            {
              'cardTitle':       "Card 9",
              'cardDescription': "Description 9",
              'cardURL':         "https://github.com/JoelSmith123/git_wired_fe/issues/23",
              'cardNumber':      19,
              'cardStatus':      'open',
              'cardColumn':      'Column 9',
            },
            {
              'cardTitle':       "Card 10",
              'cardDescription': "Description 10",
              'cardURL':         "https://github.com/JoelSmith123/git_wired_fe/issues/23",
              'cardNumber':      20,
              'cardStatus':      'closed',
              'cardColumn':      'Column 10',
            },
            {
              'cardTitle':       "Card 11",
              'cardDescription': "Description 11",
              'cardURL':         "https://github.com/JoelSmith123/git_wired_fe/issues/23",
              'cardNumber':      21,
              'cardStatus':      'in-progress',
              'cardColumn':      'Column 11',
            },
            {
              'cardTitle':       "Card 12",
              'cardDescription': "Description 12",
              'cardURL':         "https://github.com/JoelSmith123/git_wired_fe/issues/23",
              'cardNumber':      22,
              'cardStatus':      'to-do',
              'cardColumn':      'Column 12',
            },
          ],
        }
      },
    }
    return stub
  }

  getGithub = (parseFunc) => {
    // TO DO - No Repos exist in DB until GET Repos is called in new wireframe
    // let id =
    let id  = this.props.project_id
    let url = `https://git-wired-be.herokuapp.com/api/v1/repositories/${id}/issues`
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
    let id   = this.props.wireframe_id
    let repo
    let url  = `https://git-wired-be.herokuapp.com/api/v1/repositories/${repo}/wireframes/${id}`
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
