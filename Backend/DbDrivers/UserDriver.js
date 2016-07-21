const Config          = require('../Config/config.json')
const thinky          = require('thinky')(Config.rdb)
const DbSchema        = require('../Schemas/DbSchema')
const co              = require('co')

class UserDriver {
  constructor() {
      this.User     = DbSchema.User
      this.Auth     = DbSchema.Auth
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
}

module.exports =UserDriver
