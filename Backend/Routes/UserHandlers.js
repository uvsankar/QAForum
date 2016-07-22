const UserService      = require('../Services/UserService')

class UserHandlers {
  constructor() {
    this.userService  = new UserService()
  }

  sendReply(reply,promise,msg){
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
    me.userService.authenticateUser(request.payload.userName, request.payload.password).then((result)=>{
      if(result){
        request.cookieAuth.set({userName : "sankar"})
        reply("success").code(200)
      }
      else {
        reply("Nayae check ur db nee illa da").code(400)
      }
  },(err)=>{reply({err:err}).code(401)})
  }
}

module.exports = UserHandlers
