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

    it('renders project title', ()=> {
      const wrapper = shallow(<ProjectCard project={ mockProject }/>)

      expect(wrapper.instance().renderTitle()).toEqual(<div className="ProjectTitle">{wrapper.instance().getTitle()}</div>)
    });
  });

  describe('Repo Name', () => {
    it('gets repo name', () => {
      const wrapper = shallow(<ProjectCard project={ mockProject }/>)
    
      expect(wrapper.instance().getRepo()).toEqual(mockProject.repoName)
    });

    it('renders repo name', () => {
      const wrapper = shallow(<ProjectCard project={ mockProject }/>)

      expect(wrapper.instance().renderRepo()).toEqual(<div className="RepoName">{wrapper.instance().getRepo()}</div>)
    });
  });

  describe('Created At', () => {
    it('gets updated at', () => {
      const wrapper = shallow(<ProjectCard project={ mockProject }/>)
    
      expect(wrapper.instance().getUpdated()).toEqual(mockProject.updatedAt)
    });

    it('renders updated at', () => {
      const wrapper = shallow(<ProjectCard project={ mockProject }/>)

      expect(wrapper.instance().renderUpdated()).toEqual(<div className="Updated">{wrapper.instance().getUpdated()}</div>)
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
