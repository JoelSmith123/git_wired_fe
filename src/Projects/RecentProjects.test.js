const chai   = require('chai');
const should = chai.should;
const expect = chai.expect;

// import RecentProjects from './RecentProjects.js'
// const recents = new RecentProjects
const projects = [
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


describe('RecentProjects', () => {

  it.skip('return projects', done => {
    // let div = <RecentProjects projects={projects} />
    let div = renderer.create(<RecentProjects projects={projects} />).toJSON()

    done();
  });


});
