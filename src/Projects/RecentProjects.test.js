import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import RecentProjects from './RecentProjects.js'

describe('RecentProjects', () => {
  let data
  let mockProjects
  beforeEach(() => {
    mockProjects = [
      { 'projectTitle': 'Title1',
        'repoName':     'RepoName1',
        'createdAt':    'Created1',
        'updatedAt':    'Updated1',
      },
      { 'projectTitle': 'Title2',
        'repoName':     'RepoName2',
        'createdAt':    'Created2',
        'updatedAt':    'Updated2',
      },
      { 'projectTitle': 'Title3',
        'repoName':     'RepoName3',
        'createdAt':    'Created3',
        'updatedAt':    'Updated3',
      },
    ]

    data = {
      'id': '123',
      'projects': mockProjects,
    }
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RecentProjects />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<RecentProjects />)
    expect(wrapper).toMatchSnapshot()
  }) 

  xit('return projects', () => {
    // let projects = recents.projects(data)
    // let card     = projects[0]
    // expect(projects).to.be.an('array')
    // expect(card).to.be.an('object')
    // expect(card.projectTitle).to.equal('Title1')
    // expect(card.repoName    ).to.equal('RepoName1')
    // expect(card.createdAt   ).to.equal('Created1')
    // expect(card.updatedAt   ).to.equal('Updated1')

  });

  it.skip('render Project Cards', done => {

    done();
  });

  it.skip('renders', done => {

    done();
  });


});
