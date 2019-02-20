import React    from 'react';
import ReactDOM from 'react-dom';

const chai   = require('chai');
const should = chai.should;
const expect = chai.expect;

import GithubCard from './GithubCard.js'


var card = new GithubCard

const data = {
   'cardTitle':       'This is the title',
   'cardDescription': 'This is lots of long text from the body of my issue',
   'cardNumber':       13,
   'cardURL':         'https://github.com/JoelSmith123/git_wired_fe/issues/23',
   'cardStatus':      'Open',
 }



describe('GithubCard', () => {


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GithubCard card={ data } />, div);
    let r = ReactDOM.render(<GithubCard card={ data } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  xit('gets title from card', () => {
    // TO DO - TEST ME
  })

  xit('gets description from card', () => {
    // TO DO - TEST ME
  })

  xit('gets card number from card', () => {
    // TO DO - TEST ME
  })

  xit('gets card url from card', () => {
    // TO DO - TEST ME
  })

  xit('gets card status from card', () => {
    // TO DO - TEST ME
  })

});
