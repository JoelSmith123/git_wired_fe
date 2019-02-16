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

});
