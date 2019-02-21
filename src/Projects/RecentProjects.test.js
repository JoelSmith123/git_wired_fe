import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import RecentProjects from './RecentProjects.js'
import RecentProjectsService from './RecentProjectsService.js'
import ProjectCard from './ProjectCard.js'

describe('RecentProjects', () => {
  let mockRecents
  let wrapper
  let recents
  let mockCardArr
  beforeEach(() => {
    mockRecents = [
      { "createdAt": "Created At", 
        "projectTitle": "Wireframe Title 1", 
        "repoName": "Repo 1", 
        "updatedAt": "Updated At"
      }, 
      { "createdAt": "Created At", 
        "projectTitle": "Wireframe Title 2", 
        "repoName": "Repo 2", 
        "updatedAt": "Updated At"
      }
    ]

    mockCardArr = [
      <ProjectCard project={{
          "createdAt": "Created At", 
          "projectTitle": "Wireframe Title 1", 
          "repoName": "Repo 1", 
          "updatedAt": "Updated At"
      }} />, 
      <ProjectCard project={{
          "createdAt": "Created At", 
          "projectTitle": "Wireframe Title 2", 
          "repoName": "Repo 2", 
          "updatedAt": "Updated At"
      }} />]

    recents = new RecentProjectsService

    wrapper = shallow(<RecentProjects />)
    wrapper.instance().parseRecentProjects(recents.stubRecent())
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RecentProjects />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  }) 

  it('should parse recent projects', () => {
    expect(wrapper.state('cards')).toEqual(mockRecents)
  });

  it('render Project Cards', () => {
    expect(wrapper.instance().renderProjectCards(mockRecents)).toEqual(mockCardArr)
  });

  it.skip('renders', done => {

    done();
  });


});
