const Config          = require('../Config/config.json')
const thinky          = require('thinky')(Config.rdb)
const DbSchema        = require('../Schemas/DbSchema')
const Utility         = require('../Services/Utility')
const co              = require('co')
const _               = require('lodash')

class UserDriver {
  constructor() {
      this.User     = DbSchema.User
      this.Auth     = DbSchema.Auth
      this.r        = DbSchema.r
  }

  isUserExist(userName){
    const me = this
   return co(function*(){
     try{
          yield me.User.get(userName).run()
          return true
     }
     catch(err){
       return false
     }
   })
  }

  getAllDetails(){
    const me = this
    return co(function*(){
      try{
        var userList = yield me.getUsers(null,'userName')
        var topics   = yield me.r.table('Questions').withFields('tags')('tags').run()
        var topicsArray = []
        var userArray   = []
        _.forEach(userList, (value,key) =>{
          userArray.push(value.userName)
        })
        _.forEach(topics, (value, key) =>{
          topicsArray = _.union(topicsArray, value)
        })
        return  {
          users  : userArray,
          topics : topicsArray
        }
      }
      catch(err){
        throw err
      }
    })
  }

  getUser(userName){
    const me = this
    return co(function*(){
      try{
        var result = yield me.User.get(userName).run()
        return result
      }
      catch(err){throw "User not Found"}
    })
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
            userData[key] = _.union(user[key],value)
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

  getUsers(filters, withFileds){
    const me = this
    return co(function*(){
      try{
          var table = me.r.table('UserDetails')
          _.forEach(filters, (value, key)=>{
            if(_.isArray(value)){
              table = table.filter(Utility.arrayFilter(value, key,me))
            }
          })
          if(withFileds)
            table = table.withFields(withFileds)
          var result = yield table.run()
          return result
      }
      catch(err){throw err}
    })
  }
}


module.exports =UserDriver
