import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import TemplateContainer from './TemplateContainer.js'

describe('TemplateContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TemplateContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<TemplateContainer />)
    expect(wrapper).toMatchSnapshot()
  })    

  xit('updatesChildrenState', () => {
    // TO DO - TEST ME
  })

  xit('renderCurrentTemplate', () => {
    // TO DO - TEST ME
  })

  xit('renders the right template', () => {
    // TO DO - TEST ME
  })


});
