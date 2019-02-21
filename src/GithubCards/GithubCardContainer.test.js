import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import GithubCardContainer from './GithubCardContainer.js'

describe('GithubCardContainer', () => {
  let data1
  let data2
  let cards
  beforeEach(() => {
    data1 = {
       'cardTitle':       'This is the title',
       'cardDescription': 'This is lots of long text from the body of my issue',
       'cardNumber':       23,
       'cardURL':         'https://github.com/JoelSmith123/git_wired_fe/issues/23',
       'cardStatus':      'Open',
     }

    data2 = {
       'cardTitle':       'This is title2',
       'cardDescription': 'Description 2',
       'cardNumber':       16,
       'cardURL':         'https://github.com/JoelSmith123/git_wired_fe/issues/16',
       'cardStatus':      'Open',
     }

     cards = [ data1, data2]
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GithubCardContainer cards={ cards } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<GithubCardContainer cards={ cards }/>)
    expect(wrapper).toMatchSnapshot()
  })   

  it('should render github cards', () => {
    const wrapper = shallow(<GithubCardContainer cards={ cards }/>)

    expect(wrapper.instance().renderGithubCards()).toHaveLength(2)
  })

  it('should toggle dropdown state', () => {
    const wrapper = shallow(<GithubCardContainer cards={ cards }/>)
    const mockEvent = { target: {}, preventDefault: jest.fn() }

    wrapper.setState({ showDropdown: false })
    wrapper.instance().toggleDropdown(mockEvent)

    expect(wrapper.state('showDropdown')).toEqual(true)
  })

  it('should set state for statusName and change dropdown to false', () => {
    const wrapper = shallow(<GithubCardContainer cards={ cards } filterCardsAndTemplateElementsByStatus={jest.fn()}/>)
    const mockEvent = { target: {}, preventDefault: jest.fn() }
    const statusName = 'status'

    wrapper.setState({ showDropdown: true, statusName: ''})
    wrapper.instance().cardsStatusSelect(mockEvent, statusName)

    expect(wrapper.state('showDropdown')).toEqual(false)
    expect(wrapper.state('statusName')).toEqual(statusName)
  })

  it('should render dropdown on state change', () => {
    const wrapper = mount(<GithubCardContainer cards={ cards } filterCardsAndTemplateElementsByStatus={jest.fn()}/>)

    wrapper.setState({ showDropdown: true })

    expect(wrapper.find('.github-cards-container-status-dropdown')).toHaveLength(1)
  })

  it('should not render dropdown on state change', () => {
    const wrapper = mount(<GithubCardContainer cards={ cards } filterCardsAndTemplateElementsByStatus={jest.fn()}/>)

    wrapper.setState({ showDropdown: false })

    expect(wrapper.find('.github-cards-container-status-dropdown')).toHaveLength(0)    
  })

  it('should render github cards inside element', () => {
    const wrapper = mount(<GithubCardContainer cards={ cards } filterCardsAndTemplateElementsByStatus={jest.fn()}/>)

    expect(wrapper.find('.github-cards').children()).toHaveLength(2)
  })

});
