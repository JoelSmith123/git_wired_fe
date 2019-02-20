import React    from 'react';
import ReactDOM from 'react-dom';

const chai   = require('chai');
const should = chai.should;
const expect = chai.expect;

import Profile      from './Profile.js'
import UserSession from '../Tools/UserSession.js'


var container = new Profile


describe('Profile', () => {


  xit('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Profile user={ new UserSession } />, div);
    // TO DO - ^^^ I don't know how to pass all the props this needs
    ReactDOM.unmountComponentAtNode(div);
  });

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
