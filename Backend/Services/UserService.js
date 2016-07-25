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
      return me.userDriver.addNewUser(userDetails, authDetails)
    }
    catch(err){throw err}
    })
  }

  updateUser(details){
    const me = this
    return me.userDriver.updateUser(details)
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
        throw err
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
