const co         = require('co');
const UserDriver = require('../DbDrivers/UserDriver')


class UserService {
  constructor() {
    this.userDriver   = new UserDriver()
  }

  addNewUser(userDetails){
    const me = this
    return co(function* (){
      try{
      let authDetails ={
        userName      : userDetails.userName,
        password      : userDetails.password
      }
      delete userDetails.password
      for(var i=0; userDetails.following && i<userDetails.following.length; i++){
        yield me.updateUser({
          userName  : userDetails.following[i],
          followers : [userDetails.userName]
        })
      }
      return me.userDriver.addNewUser(userDetails, authDetails)
    }
    catch(err){throw err}
    })
  }

  updateUser(details){
    const me = this
    return me.userDriver.updateUser(details)
  }

  getAllDetails(){
    const me = this
    return me.userDriver.getAllDetails()
  }

  authenticateUser(userName, password){
    const me = this
    return co(function*(){
      try{
        let auth = yield me.userDriver.getAuthDetails(userName)
        if(auth.userName == userName && auth.password== password)
         return true
        return false
      }
      catch(err){
        return false // no use in throwing an error...
      }
    })
  }

  getUser(userName){
    const me = this
    return me.userDriver.getUser(userName)
  }

  isUserExist(userName){
    const me = this
    return me.userDriver.isUserExist(userName)
  }
}

module.exports  = UserService
