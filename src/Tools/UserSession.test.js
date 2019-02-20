const chai   = require('chai');
const should = chai.should;
const expect = chai.expect;

import UserSession from './UserSession.js'
const user = new UserSession

describe('UserSession', () => {

  it('should set and retrieve a user session', done => {
    let token = '123'
    user.setGitWiredToken(token)
    let stored = user.getGitWiredToken()
    expect(stored).to.equal(token);
    done();
  });

  it('should logout user by removing token from sessionStorage', done => {
    let token = '123'
    user.setGitWiredToken(token)
    user.logout()
    let stored = user.getGitWiredToken()
    expect(stored).to.equal(null);
    done();
  });

  it('should create a boolean value for if a user is logged in', done => {
    user.logout()
    expect(user.isLoggedIn()).to.be(false)
    let token = '123'
    user.setGitWiredToken(token)
    expect(user.isLoggedIn()).to.be(true)
    done();
  });

  it.skip('should obtain the token from the URL upon redirect from BE authorization page', done => {
    // TO DO - TEST ME
    // MOCK URL
  });

  it.skip('log a user in', done => {
    // TO DO - TEST ME
    // Mock URL
    done();
  });


});
