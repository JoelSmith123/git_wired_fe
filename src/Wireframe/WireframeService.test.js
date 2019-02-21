import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import WireframeService from './WireframeService'

describe('WireframeService', () => {
  let wireframeService
  beforeEach(() => {
    wireframeService = new WireframeService()
  })

  it('should match snapshot', () => {
    const wrapper = wireframeService
    expect(wrapper).toMatchSnapshot()
  }) 

  it('should return stub on stubGithub invocation', () => {
    const wrapper = wireframeService
    const mockStubCards = [{
        'cardTitle':       "Card 1",
        'cardDescription': "Description 1",
        'cardURL':         "https://github.com/JoelSmith123/git_wired_fe/issues/23",
        'cardNumber':      11,
        'cardStatus':      'open',
        'cardColumn':      'Column 1',
      },
      {
        'cardTitle':       "Card 2",
        'cardDescription': "Description 2",
        'cardURL':         "https://github.com/JoelSmith123/git_wired_fe/issues/23",
        'cardNumber':      12,
        'cardStatus':      'closed',
        'cardColumn':      'Column 2',
      }
    ]

    expect(wrapper.stubGithub().data.attributes.cards[0]).toEqual(mockStubCards[0])
    expect(wrapper.stubGithub().data.attributes.cards[1]).toEqual(mockStubCards[1])
  }) 

  it('should return stub on stubWireframe invocation', () => {
    const wrapper = wireframeService
    const mockStub = {
      'data': {
        'id':         1,
        'attributes': {
          'title':        "Wireframe Title",
          'updated':      "Updated At",
          'created':      "Created At",
          'templateData': "{'Something': 1, 'Something': 2}",
        },
      },
    }

    expect(wrapper.stubWireframe()).toEqual(mockStub)
  })

})

