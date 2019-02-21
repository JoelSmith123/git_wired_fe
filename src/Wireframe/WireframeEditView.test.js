import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import WireframeEditView from './WireframeEditView.js'
import WireframeService from './WireframeService.js'


describe('WireframeEditView', () => {
  let frame
  let mockWireframeData
  let mockGithubData
  beforeEach(() => {
    frame = new WireframeService
    mockWireframeData = frame.stubWireframe()
    mockGithubData = frame.stubGithub()
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WireframeEditView />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<WireframeEditView />)
    expect(wrapper).toMatchSnapshot()
  })   

  it('should parse wireframe response', () => {
    const wrapper = shallow(<WireframeEditView />)
    const mockInfo = mockWireframeData['data']['attributes']
    const mockState = {
      wireframeTitle: mockInfo['title'],
      wireframeUpdated: mockInfo['updated'],
      wireframeCreated: mockInfo['created']
    }

    wrapper.instance().parseWireframeResponse(frame.stubWireframe())

    expect(wrapper.state('wireframeTitle')).toEqual(mockState.wireframeTitle)
    expect(wrapper.state('wireframeUpdated')).toEqual(mockState.wireframeUpdated)
    expect(wrapper.state('wireframeCreated')).toEqual(mockState.wireframeCreated)
  })

  it('should parse github response', () => {
    const wrapper = shallow(<WireframeEditView />)
    const mockInfo = mockGithubData['data']['attributes']
    const mockState = {
      repo: mockInfo['repo'],
      project: mockInfo['project'],
      cards: mockInfo['cards']
    }

    wrapper.instance().parseGithubResponse(frame.stubGithub())

    expect(wrapper.state('repo')).toEqual(mockState.repo)
    expect(wrapper.state('project')).toEqual(mockState.project)
    expect(wrapper.state('cards')).toEqual(mockState.cards)
  })  

  it('should add filtered cards to state if status is true', () => {
    const wrapper = shallow(<WireframeEditView />)
    const mockCards = [
      {
        cardStatus: 'status'
      }
    ] 

    wrapper.setState({ cards: mockCards  })
    wrapper.instance().filterCardsAndTemplateElementsByStatus('status')

    expect(wrapper.state('filteredCards')).toEqual(mockCards)
  })

  it('should add filtered cards to state if status is false', () => {
    const wrapper = shallow(<WireframeEditView />)
    const mockCards = [
      {
        cardStatus: 'status'
      }
    ] 

    wrapper.setState({ cards: mockCards  })
    wrapper.instance().filterCardsAndTemplateElementsByStatus(null)

    expect(wrapper.state('filteredCards')).toEqual(null)
  })  
})

