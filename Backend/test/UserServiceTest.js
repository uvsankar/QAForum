const co                  = require('co')
const sinon               = require('sinon')
const UserService         = require('../src/Services/UserService')
const DbSchema            = require('../src/Schemas/DbSchema')
const Utility             = require('../src/Services/Utility')

var chai                  = require('chai')
const chaiAsPromised      = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert              = require('chai').assert
const expect              = require('chai').expect


describe("UserServices", function(){

  const User          = DbSchema.User
  const Auth          = DbSchema.Auth
  const userName      = Utility.genUID('u')
  const userService   = new UserService()

  before(function(done){
      user = new User({'userName' : userName})
      auth = new Auth({'userName' : userName, 'password' : "test123"})
      co(function*(){
          yield User.save(user)
          yield Auth.save(auth)
      }).then(function(){done()},function(err){throw err})
  })

  it('isUserExist', function(done){
      let promise = Promise.all([
       expect(userService.isUserExist(userName)).to.eventually.equal(true),
       expect(userService.isUserExist('__!')).eventually.equal(false)
     ])

     assert.isFulfilled(promise).notify(done)
  })

  it('authenticateUser', function(done){
     let promise = Promise.all([
      assert.eventually.equal(userService.authenticateUser(userName, "test123"),true),
      assert.eventually.equal(userService.authenticateUser(userName,"test"),false),
      assert.eventually.equal(userService.authenticateUser("blah_blah","fda"),false)
    ])
    assert.isFulfilled(promise).notify(done)
  })

  it('getAllDetails', function(done){
    assert.eventually.isObject(userService.getAllDetails()).notify(done)
  })

  it('getUser', function(done){
    sinon.spy(userService, "getUser")
    assert.isRejected(userService.getUser('adf')).notify(done)
  })

  it('updateUser rating should change', function(done){
    let promise = co(function*(){
      yield userService.updateUser({userName:userName,rating:100})
      var user = yield userService.getUser(userName)
      return user.rating
    })
    assert.eventually.equal(promise, 100).notify(done)
  })

  it('addNewUser should throw err on same username', function(done){
    assert.isRejected(userService.addNewUser({userName})).notify(done)
  })
})
