const Config          = require('../Config/config.json')
const thinky          = require('thinky')(Config.rdb)
const DbSchema        = require('../Schemas/DbSchema')
const co              = require('co')
const _               = require('lodash')

class UserDriver {
  constructor() {
      this.User     = DbSchema.User
      this.Auth     = DbSchema.Auth
  }

  isUserExist(userName){
    const me = this
    if(me.User.get(userName) == null)
     return false
    return true
  }

  addNewUser(userDetails, authDetails){
    const me        = this
    userDetails     = new me.User(userDetails)
    authDetails     = new me.Auth(authDetails)

    return co(function* (){
      try{
        yield me.User.save(userDetails)
        yield me.Auth.save(authDetails)
        return {
          msg : "User Added Successfully"
        }
      }
      catch(err){
        throw err
      }
    })
  }

  updateUser(userData){
    const me      = this
    return co(function*(){
      try{
        let user      = yield me.User.get(userData.userName).run()
            // arrays gets replaced so need to append manually
        _.forOwn(userData, (value, key)=>{
          if(_.isArray(value))
            userData[key] = _.concat(user[key],value)
        })

        let result    = yield user.merge(userData).save()
        return {
          msg : "Updation Successfull"
        }
      }
      catch(err){
        throw err;
      }
    })
  }

  getAuthDetails(userName) {
    const me = this
    return co(function*(){
    try{
        let user = yield me.Auth.get(userName).run()
        return user
    }
    catch(err){ throw "User not found" }
    })
  }

 }

module.exports =UserDriver
