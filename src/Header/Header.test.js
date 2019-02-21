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

  it('should toggle dropdown state on toggleDropdown invocation', () => {
    const wrapper = shallow(<Header user={ new UserSession }/>)
    const mockEvent = { target: {}, preventDefault: jest.fn() }

    wrapper.setState({ showDropdown: false })
    wrapper.instance().toggleDropdown(mockEvent)

    expect(wrapper.state('showDropdown')).toEqual(true)
  })

  it('should change dropdown state', () => {
    const wrapper = shallow(<Header user={ new UserSession } selectTemplate={jest.fn()}/>)
    const mockEvent = { target: {}, preventDefault: jest.fn() }
    const mockTemplateName = 'template name'

    wrapper.setState({ showDropdown: true })
    wrapper.instance().handleTemplateSelection(mockEvent, mockTemplateName)

    expect(wrapper.state('showDropdown')).toEqual(false)
  })

  it('should conditionally render header based on loggedIn state true', () => {
    const wrapper = mount(<Header user={ new UserSession } selectTemplate={jest.fn()} loggedIn={true} changeLoggedInState={jest.fn()}/>)

    expect(wrapper.find('.header-recent-projects-btn-dropdown-container')).toHaveLength(1)
  })

  it('should conditionally render header based on loggedIn state false', () => {
    const wrapper = mount(<Header user={ new UserSession } selectTemplate={jest.fn()} loggedIn={false} changeLoggedInState={jest.fn()}/>)

    expect(wrapper.find('.header-title-container')).toHaveLength(1)
  }) 

  it('should call handleTemplateSelection on button click', () => {
    const wrapper = mount(<Header user={ new UserSession } selectTemplate={jest.fn()} loggedIn={false} changeLoggedInState={jest.fn()}/>)
    wrapper.setState({ loggedIn: true, showDropdown: true })
    wrapper.find('.header-recent-projects-btn-dropdown-btn').forEach((btn) => {
      btn.simulate('click')
      expect(wrapper.instance().handleTemplateSelection()).toHaveBeenCalled()
    })
  }) 

});
