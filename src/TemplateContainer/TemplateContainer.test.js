import React    from 'react';
import ReactDOM from 'react-dom';

const chai   = require('chai');
const should = chai.should;
const expect = chai.expect;

import TemplateContainer from './TemplateContainer.js'


var container = new TemplateContainer


describe('TemplateContainer', () => {


  xit('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TemplateContainer />, div);
    // TO DO - ^^^ I don't know how to pass all the props this needs
    ReactDOM.unmountComponentAtNode(div);
  });

  xit('updatesChildrenState', () => {
    // TO DO - TEST ME
  })

  xit('renderCurrentTemplate', () => {
    // TO DO - TEST ME
  })

  xit('renders the right template', () => {
    // TO DO - TEST ME
  })


});
