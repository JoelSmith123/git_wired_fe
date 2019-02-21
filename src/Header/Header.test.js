import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Header from './Header.js'
import UserSession from '../Tools/UserSession.js'

describe('Header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header user={ new UserSession } changeLoggedInState={jest.fn()}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<Header user={ new UserSession } changeLoggedInState={jest.fn()}/>)
    expect(wrapper).toMatchSnapshot()
  })  

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
