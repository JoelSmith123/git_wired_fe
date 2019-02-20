import React    from 'react';
import ReactDOM from 'react-dom';

const chai   = require('chai');
const should = chai.should;
const expect = chai.expect;

import Welcome from './Welcome.js'


var container = new Welcome


describe('Welcome', () => {


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Welcome />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  xit('should render instructional content', () => {
    // TO DO - TEST ME
  })


});
