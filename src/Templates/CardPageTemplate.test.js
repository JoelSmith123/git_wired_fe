import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CardPageTemplate from './CardPageTemplate.js'

describe('CardPageTemplate', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardPageTemplate />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<CardPageTemplate />)
    expect(wrapper).toMatchSnapshot()
  })   
})