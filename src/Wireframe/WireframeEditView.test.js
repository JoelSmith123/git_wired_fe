import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import WireframeEditView from './WireframeEditView.js'
import WireframeService from './WireframeService.js'


describe('WireframeEditView', () => {
  let frame
  let mockData
  beforeEach(() => {
    frame = new WireframeService
    mockData = frame.stubWireframe()
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
    const mockInfo = mockData['data']['attributes']
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
})