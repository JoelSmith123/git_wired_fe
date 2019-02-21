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

  it('should update state with new header buttons', () => {
    const wrapper = shallow(<CardPageTemplate />)
    const mockEvent = { target: {}, preventDefault: jest.fn() }

    wrapper.setState({ headerButtons: 1 })
    wrapper.instance().addBtnToHeader(mockEvent)

    expect(wrapper.state('headerButtons')).toEqual(2)
  })

  it('should render new buttons based on state', () => {
    const wrapper = shallow(<CardPageTemplate />)
    const mockHeaderButtonArr = "[{\"type\":\"button\",\"key\":\"0\",\"ref\":null,\"props\":{\"className\":\"template-header-btn\"},\"_owner\":null,\"_store\":{}}]"
    wrapper.setState({ headerButtons: 1 })

    expect(JSON.stringify(wrapper.instance().renderBtnToHeader())).toEqual(mockHeaderButtonArr)
  })  
})