const UserDriver      = require('../DbDrivers/UserDriver')

class Handlers {
  constructor() {
    this.userDriver  = new UserDriver()
  }

  newUserHandler(request, reply){
    const me = this

    me.userDriver.addNewUser(request.payload.userDetails, request.payload.authDetails)
      .then((msg)=>{
        reply(msg).code(200)
      },(err) =>{
        reply({msg:err}).code(400)
      })
  }
}

module.exports = Handlers
