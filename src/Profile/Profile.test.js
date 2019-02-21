import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Profile from './Profile.js'
import UserSession from '../Tools/UserSession.js'

describe('Profile', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Profile user={ new UserSession } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<Profile user={new UserSession}/>)
    expect(wrapper).toMatchSnapshot()
  })  

  xit('renders RecentProjects', () => {
    // TO DO - TEST ME
  })

  xit('has functional dropdown for Repos', () => {
    // TO DO - TEST ME
  })

  xit('has functional dropdown for Projects', () => {
    // TO DO - TEST ME
  })

  xit('has functional dropdown for Type of page', () => {
    // TO DO - TEST ME
  })

  xit('can start a new project and move to WireframeEditView', () => {
    // TO DO - TEST ME
  })


});
