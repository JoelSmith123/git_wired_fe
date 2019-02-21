import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import ProjectCard from './ProjectCard.js'



describe('ProjectCard', () => {
  let mockProject
  beforeEach(() => {
    mockProject = {
      'projectTitle': 'Title1',
      'repoName':     'RepoName1',
      'createdAt':    'Created1',
      'updatedAt':    'Updated1',
    }
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProjectCard project={mockProject} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<ProjectCard project={mockProject} />)
    expect(wrapper).toMatchSnapshot()
  }) 

  describe('Title', () => {
    it('gets project title', () => {
      const wrapper = shallow(<ProjectCard project={ mockProject }/>)
    
      expect(wrapper.instance().getTitle()).toEqual(mockProject.projectTitle)      
    });

    it.skip('renders project title', done => {

            // TO DO - TEST HERE

      done();
    });
  });

  describe('Repo Name', () => {
    it.skip('gets repo name', done => {

      // TO DO - TEST HERE

      done();
    });
    it.skip('renders repo name', done => {

            // TO DO - TEST HERE

      done();
    });
  });

  describe('Created At', () => {
    it.skip('gets created at', done => {

      // TO DO - TEST HERE

      done();
    });
    it.skip('renders created at', done => {

            // TO DO - TEST HERE

      done();
    });
  });

  describe('Updated At', () => {
    it.skip('gets updated at', done => {

      // TO DO - TEST HERE

      done();
    });
    it.skip('renders updated at', done => {

            // TO DO - TEST HERE

      done();
    });
  });

  it('renders card', done => {

    // TO DO - TEST HERE

    done();
  });


});
