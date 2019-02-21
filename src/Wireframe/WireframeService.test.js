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
})