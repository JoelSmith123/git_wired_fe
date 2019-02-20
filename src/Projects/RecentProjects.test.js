const chai   = require('chai');
const should = chai.should;
const expect = chai.expect;

import RecentProjects from './RecentProjects.js'

const stubProjects = [
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

const data = {
  'id': '123',
  'projects': stubProjects,
}

describe('RecentProjects', () => {

  xit('return projects', done => {
    let recents  = new RecentProjects
    let projects = recents.projects(data)
    let card     = projects[0]
    expect(projects).to.be.an('array')
    expect(card).to.be.an('object')
    expect(card.projectTitle).to.equal('Title1')
    expect(card.repoName    ).to.equal('RepoName1')
    expect(card.createdAt   ).to.equal('Created1')
    expect(card.updatedAt   ).to.equal('Updated1')
    done();
  });

  it.skip('render Project Cards', done => {
    let recents  = new RecentProjects

    done();
  });

  it.skip('renders', done => {
    let recents  = new RecentProjects

    done();
  });


});
