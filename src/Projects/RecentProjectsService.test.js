import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import RecentProjectsService from './RecentProjectsService'
import UserSession from '../Tools/UserSession.js'

describe('RecentProjectsService', () => {
  let recentProjectsService
  beforeEach(() => {
    recentProjectsService = new RecentProjectsService()
  })
  
  it('should match snapshot', () => {
    const wrapper = recentProjectsService
    expect(wrapper).toMatchSnapshot()
  })    
})