import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Welcome from './Welcome.js'

describe('Welcome', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Welcome />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<Welcome />)
    expect(wrapper).toMatchSnapshot()
  }) 

  xit('should render instructional content', () => {
    // TO DO - TEST ME
  })


});
