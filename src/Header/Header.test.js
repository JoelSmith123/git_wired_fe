import React    from 'react';
import ReactDOM from 'react-dom';

const chai   = require('chai');
const should = chai.should;
const expect = chai.expect;

import Header      from './Header.js'
import UserSession from '../Tools/UserSession.js'


var container = new Header


describe('Header', () => {


  xit('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header user={ new UserSession } />, div);
    // TO DO - ^^^ I don't know how to pass all the props this needs
    ReactDOM.unmountComponentAtNode(div);
  });

  xit('toggleDropdown', () => {
    // TO DO - TEST ME
  })

  xit('handleTemplateSelection', () => {
    // TO DO - TEST ME
  })

  xit('renders things that I do not know to test', () => {
    // TO DO - TEST ME
  })

});
