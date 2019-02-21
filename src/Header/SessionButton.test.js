import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import SessionButton from './SessionButton.js'
import UserSession from '../Tools/UserSession.js'

describe('SessionButton', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SessionButton user={new UserSession} changeLoggedInState={jest.fn()}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<SessionButton user={new UserSession} changeLoggedInState={jest.fn()}/>)
    expect(wrapper).toMatchSnapshot()
  }) 

  it('should return loginButton', () => {
    const wrapper = shallow(<SessionButton user={new UserSession} changeLoggedInState={jest.fn()}/>)
    const mockButton = "{\"type\":\"input\",\"key\":null,\"ref\":null,\"props\":{\"type\":\"button\",\"className\":\"header-btn header-login-btn\",\"value\":\"Login\"},\"_owner\":null,\"_store\":{}}"

    expect(JSON.stringify(wrapper.instance().loginButton())).toEqual(mockButton)
  })

  it('should return logoutButton', () => {
    const wrapper = shallow(<SessionButton user={new UserSession} changeLoggedInState={jest.fn()}/>)
    const mockButton = "{\"type\":\"input\",\"key\":null,\"ref\":null,\"props\":{\"type\":\"button\",\"className\":\"header-btn header-logout-btn\",\"value\":\"Logout\"},\"_owner\":null,\"_store\":{}}"

    expect(JSON.stringify(wrapper.instance().logoutButton())).toEqual(mockButton)
  })

  it('should call goToAuth on loginButton click', () => {
    const wrapper = mount(<SessionButton user={new UserSession} changeLoggedInState={jest.fn()}/>)
    wrapper.instance().goToAuth = jest.fn()

    wrapper.find('.header-login-btn').simulate('click')

    expect(wrapper.instance().goToAuth).toHaveBeenCalled()
  })

  it('should call functions on logoutButton click', () => {
    const user = {
      logout: jest.fn(),
      isLoggedIn: () => true
    }
    const wrapper = mount(<SessionButton user={user} changeLoggedInState={jest.fn()}/>)
    wrapper.instance().updateState = jest.fn()
    wrapper.find('.header-logout-btn').simulate('click')

    expect(wrapper.instance().updateState).toHaveBeenCalled()
    expect(wrapper.prop('user').logout).toHaveBeenCalled()
  })

})