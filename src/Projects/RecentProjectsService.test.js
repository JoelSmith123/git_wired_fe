import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import RecentProjectsService from './RecentProjectsService'
import UserSession from '../Tools/UserSession.js'

describe('RecentProjectsService', () => {
  let recentProjectsService
  let mockStub
  let user
  beforeEach(() => {
    recentProjectsService = new RecentProjectsService()
    user = new UserSession

    mockStub =  {
      'data': {
        'id':         1,
        'attributes': {
          'recent': [
            {
              'projectTitle':   "Wireframe Title 1",
              'repoName':       "Repo 1",
              'updatedAt':      "Updated At",
              'createdAt':      "Created At",
            },
            {
              'projectTitle':   "Wireframe Title 2",
              'repoName':       "Repo 2",
              'updatedAt':      "Updated At",
              'createdAt':      "Created At",
            },
          ],
        }
      },
    }

    window.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({ok: true, json: () => Promise.resolve(mockStub.recent)})})
  })

  it('should match snapshot', () => {
    const wrapper = recentProjectsService
    expect(wrapper).toMatchSnapshot()
  })    

  it('should return new stub on stubRecent invokation', () => {
    const wrapper = recentProjectsService
    expect(wrapper.stubRecent()).toEqual(mockStub)
  })

  it('should check if fetch is called with correct params in getRecents', () => {
    const wrapper = recentProjectsService
    const parseFunc = jest.fn()
    const expected = [
      'https://git-wired-be.herokuapp.com/api/v1/wireframes',
      {
        method:  "GET",
        headers: { "Content-Type": "application/json", },
        body:    JSON.stringify(user.getGitWiredToken()),
      } 
    ]

    wrapper.getRecents(parseFunc)
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  })
})

