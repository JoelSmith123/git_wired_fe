import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import GithubCardContainer from './GithubCardContainer.js'





describe('GithubCardContainer', () => {
  let data1
  let data2
  let cards
  beforeEach(() => {
    data1 = {
       'cardTitle':       'This is the title',
       'cardDescription': 'This is lots of long text from the body of my issue',
       'cardNumber':       23,
       'cardURL':         'https://github.com/JoelSmith123/git_wired_fe/issues/23',
       'cardStatus':      'Open',
     }

    data2 = {
       'cardTitle':       'This is title2',
       'cardDescription': 'Description 2',
       'cardNumber':       16,
       'cardURL':         'https://github.com/JoelSmith123/git_wired_fe/issues/16',
       'cardStatus':      'Open',
     }

     cards = [ data1, data2]
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GithubCardContainer cards={ cards } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<GithubCardContainer cards={ cards }/>)
    expect(wrapper).toMatchSnapshot()
  })   

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
