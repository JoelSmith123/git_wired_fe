

export default class WireframeEditView {

  constructor = () => {
    this.user = new UserSession

    // this.getGithub()
    // this.getWireframe()
  }


  getWireframe = () => {
    // HOW DOES ENDPOINT WORK
    //
    //
    // .then(data     => this.parseWireframeResponse(data))
  }

  parseWireframeResponse = (data) => {
    let info    = data['data']['attributes']
    let title   = info['title']
    let updated = info['updated']
    let created = info['created']
    this.setState( {
      wireframeTitle:   title,
      wireframeUpdated: updated,
      wireframeCreated: created
    } )
  }

  getGithub = () => {
    // TO DO - Confirm ENDPOINT
    let id  = this.props.project_id
    let url = `https://git-wired-be.herokuapp.com/api/v1/projects/${id}/cards`
    fetch(url, {
        method:  "GET",
        headers: { "Content-Type": "application/json", },
        body:    JSON.stringify(this.user.getGitWiredToken()),
    })
    .then(response => response.json() )
    // .then(data     => this.renderGithubCards(data).bind(this))
    // .then(data     => this.parseResponse(data).bind(this))
    .then(data     => this.parseGithubResponse(data))
    .catch(error   => console.error('Error:', error));
  }

  parseGithubResponse = (data) => {
    let info    = data['data']['attributes']
    let repo    = info['repo']
    let project = info['project']
    let cards   = info['card']
    this.setState( {
      repo:    repo,
      project: project,
      cards:   cards
    } )
  }


  render() {
    return (
      <div className='WireframeEditView'>
        <div className='WireframeHeaderContainer'>
          // Come from wireframe API
          <span className='WireframeTitle'>{ this.state.wireframeTitle }</span>
          <span className='Timestamps'>
            <span className='UpdatedTimestamp'>{ this.state.wireframeUpdated }</span>
            <span className='CreatedTimestamp'>{ this.state.wireframeCreated }</span>
          </span>
          // Come from cards API
          <span className='Timestamps'>
            <span className='RepoName'>
              <a href={this.state.repo.url}>{ this.state.repo.name }</a>
            </span>
            <span className='ProjectName'>
              <a href={this.state.project.url}>{ this.state.wireframeCreated }</a>
            </span>
          </span>
        </div>
        // TO DO - we need to make sure template gets passed here
        //  -- props vs state ?
        <div className='WireframeEditContent'>
          // Can we confirm that these are loaded in the correct order when both make async calls?
          <TemplateContainer currentTemplate={this.state.template} />
          <GithubCardContainer cards={ this.state.cards} />
        </div>

      </div>
    )
  }




}
