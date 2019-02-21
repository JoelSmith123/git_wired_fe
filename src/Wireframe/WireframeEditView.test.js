import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import WireframeEditView from './WireframeEditView.js'

describe('WireframeEditView', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WireframeEditView />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<WireframeEditView />)
    expect(wrapper).toMatchSnapshot()
  })   
})