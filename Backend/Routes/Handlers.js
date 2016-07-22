const UserService      = require('../Services/UserService')

class Handlers {
  constructor() {
    this.userService  = new UserService()
  }

  sendReply(reply,promise,msg){
    // ???? change this idiot ??? ///
    if(promise == undefined){
      reply(msg)
      return
    }
    promise.then((msg)=>{
      reply({msg:msg}).code(200)
    },(err)=>{
      reply({err:err}).code(400)
    })
  }

  newUserHandler(request, reply){
    const me = this
    let promise = me.userService.addNewUser(request.payload)
    me.sendReply(reply,promise)
  }

  updateUserHandler(request, reply){
    const me    = this
    let promise = me.userService.updateUser(request.payload)
    me.sendReply(reply, promise)
  }

  loginHandler(request, reply){
    const me = this
    if(request.auth.isAuthenticated)
      return reply.redirect('/')
    else if(me.userService.authenticateUser(request.payload.userName, request.payload.password)){
      request.cookieAuth.set({userName : "sankar"})
      reply("success").code(200)
    }
    else {
      reply("Nayae check ur nee db illa da").code(400)
    }
  }
}

module.exports = Handlers
