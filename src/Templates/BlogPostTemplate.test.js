import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import BlogPostTemplate from './BlogPostTemplate.js'

describe('BlogPostTemplate', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BlogPostTemplate />, div);
    ReactDOM.unmountComponentAtNode(div);
  });  

  it('should match snapshot', () => {
    const wrapper = shallow(<BlogPostTemplate />)
    expect(wrapper).toMatchSnapshot()
  })   
})