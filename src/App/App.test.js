import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './App';

const chai   = require('chai');
const should = chai.should;
const expect = chai.expect;

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


});
