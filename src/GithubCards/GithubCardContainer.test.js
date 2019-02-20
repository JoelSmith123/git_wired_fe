import React    from 'react';
import ReactDOM from 'react-dom';

const chai   = require('chai');
const should = chai.should;
const expect = chai.expect;

import GithubCardContainer from './GithubCardContainer.js'


var container = new GithubCardContainer

const data1 = {
   'cardTitle':       'This is the title',
   'cardDescription': 'This is lots of long text from the body of my issue',
   'cardNumber':       23,
   'cardURL':         'https://github.com/JoelSmith123/git_wired_fe/issues/23',
   'cardStatus':      'Open',
 }

const data2 = {
   'cardTitle':       'This is title2',
   'cardDescription': 'Description 2',
   'cardNumber':       16,
   'cardURL':         'https://github.com/JoelSmith123/git_wired_fe/issues/16',
   'cardStatus':      'Open',
 }

 const cards = [ data1, data2]



describe('GithubCardContainer', () => {


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GithubCardContainer cards={ cards } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  xit('it has functional dropdown item - open', () => {
    // TO DO - TEST ME
  })

  xit('it has functional dropdown item - closed', () => {
    // TO DO - TEST ME
  })

  xit('it has functional dropdown item - in-progress', () => {
    // TO DO - TEST ME
  })

  xit('it has functional dropdown item - to-dos', () => {
    // TO DO - TEST ME
  })

  xit('displays a card', () => {
    // TO DO - TEST ME
  })

  xit('displays all cards', () => {
    // TO DO - TEST ME
  })


});
