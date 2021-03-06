import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
import Profile from '../Profile/Profile.js'
import Welcome from '../Welcome/Welcome.js'
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

  it('should return properties from experience_userProfile', () => {
    const wrapper = shallow(<App user={new UserSession}/>)

    wrapper.setState({ loggedIn: true, profile: true})

    expect(wrapper.instance().experience_userProfile()).toEqual(true)
  })

  it('should return properties from experience_userRecents', () => {
    const wrapper = shallow(<App user={new UserSession}/>)

    wrapper.setState({ loggedIn: true, viewPage: 'recent' })

    expect(wrapper.instance().experience_userRecents()).toEqual(true)
  })  

  it('should return properties from experience_welcome', () => {
    const wrapper = shallow(<App user={new UserSession}/>)

    wrapper.setState({ loggedIn: true, viewPage: 'welcome' })

    expect(wrapper.instance().experience_welcome()).toEqual(true)
  })  

  it('should return properties from experience_userWireframe', () => {
    const wrapper = shallow(<App user={new UserSession}/>)

    wrapper.setState({ loggedIn: true, viewPage: 'wireframe' })

    expect(wrapper.instance().experience_userWireframe()).toEqual(true)
  })   

  it('should render Profile if loggedIn state is true', () => {
    const wrapper = mount(<App user={new UserSession}/>)

    wrapper.setState({ loggedIn: true })

    expect(wrapper.instance().selectComponentRender()).toEqual(<Profile changeViewPageState={wrapper.instance().changeViewPageState}/>)
  })

  it('should render Welcome if loggedIn state is false', () => {
    const wrapper = mount(<App user={new UserSession}/>)

    wrapper.setState({ loggedIn: false })

    expect(wrapper.instance().selectComponentRender()).toEqual(<Welcome />)    
  })

});
