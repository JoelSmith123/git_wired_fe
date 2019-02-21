import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import BlogPageTemplate from './BlogPageTemplate'

describe('BlogPageTemplate', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<BlogPageTemplate buildElementObjectForBackend={jest.fn()} fetchTemplateObjectFromBackend={jest.fn()} />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
    ReactDOM.unmountComponentAtNode(div);
  });  

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })  

  it('should change header buttons state', () => {
    const mockEvent = { target: {}, preventDefault: jest.fn() }

    wrapper.setState({ headerButtons: 1 })
    wrapper.instance().addBtnToHeader(mockEvent)

    expect(wrapper.state('headerButtons')).toEqual(2)
  })

  it('should call required functions on buildTemplateObject invocation', () => {
    wrapper.instance().findElementChildrenToAddToObject = jest.fn()
    wrapper.instance().buildTemplateObject()

    expect(wrapper.instance().findElementChildrenToAddToObject).toHaveBeenCalled()
    expect(wrapper.prop('buildElementObjectForBackend')).toHaveBeenCalled()
  })

  it.skip('should add header properties to templateObj', () => {
    const mockElement = {
      children: {
        child: {
          classList: ['template-header'],
          id: 1          
        }
      }
    }
    const mockTemplateObjResult = {
      header: {
        label: 'header label',
        desc: 'header description',
        card: 1
      }
    }
    let mockTemplateObj = {}

    wrapper.instance().findElementChildrenToAddToObject(mockElement, mockTemplateObj)

    expect(mockTemplateObj).toEqual(mockTemplateObjResult)
  })

  // need tests for the rest of the conditional templateObj properties

  it('should update state with templateObj', () => {
    wrapper.setState({ templateObj: {} })
    wrapper.instance().addFetchedTemplateObjectToWireframe()

    expect(wrapper.prop('fetchTemplateObjectFromBackend')).toHaveBeenCalled()
  })
})

