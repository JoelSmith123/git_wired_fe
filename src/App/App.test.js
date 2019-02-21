import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
import UserSession from '../Tools/UserSession.js'

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App user={new UserSession}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<App user={new UserSession}/>)
    expect(wrapper).toMatchSnapshot()
  })  

  it('should select template', () => {
    const wrapper = shallow(<App user={new UserSession}/>)
    const mockEvent = { target: {}, preventDefault: jest.fn() }
    const mockTemplate = 'mock-template'

    wrapper.setState({ template: '' })
    wrapper.instance().selectTemplate(mockEvent, mockTemplate)

    expect(wrapper.state('template')).toEqual(mockTemplate)
  })

  it('should update logged in state', () => {
    const mockUser = { isLoggedIn: jest.fn(), getURLToken: jest.fn() }
    const wrapper = shallow(<App user={mockUser}/>)
    const mockEvent = { target: {}, preventDefault: jest.fn() }

    wrapper.setState({ loggedIn: false })
    wrapper.instance().changeLoggedInState(mockEvent)

    expect(mockUser.isLoggedIn).toHaveBeenCalled()
  })

  it('should update state to view profile', () => {
    const wrapper = shallow(<App user={new UserSession}/>)
    const mockEvent = { target: {}, preventDefault: jest.fn() }

    wrapper.setState({ viewProfile: false, template: 'template' })
    wrapper.instance().viewProfile(mockEvent)

    expect(wrapper.state('viewProfile')).toEqual(true)
    expect(wrapper.state('template')).toEqual('')
  })

});
