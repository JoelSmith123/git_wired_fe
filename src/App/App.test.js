import React    from 'react';
import ReactDOM from 'react-dom';

const chai   = require('chai');
const should = chai.should;
const expect = chai.expect;

import App         from './App';
import UserSession from '../Tools/UserSession.js'

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App user={new UserSession}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


});
