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

  it.skip('should fetch the user token', done => {
    // CANNOT TEST THIS because of login with Github
  });

  it.skip('can grab the token from the API response', done => {
    let data = {
      'id': 1,
      'userToken': '123'
    }
    let token = user.getToken(data)
    expect(token).to.equal('123');
    done();
  });


});
