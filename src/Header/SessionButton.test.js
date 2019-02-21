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
})