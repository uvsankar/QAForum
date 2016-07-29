const UserService      = require('../Services/UserService')
const NotfService      = require('../Services/NotfService')

class UserHandlers {
  constructor() {
    this.userService  = new UserService()
    this.notfService  = new NotfService()
  }

  sendReply(reply,promise,msg){
    promise.then((msg)=>{
      reply({msg:msg}).code(200)
    },(err)=>{
      reply({err:err}).code(400)
    })
  }

  getAllDetailsHandler(request, reply) {
    const me = this
     let promise =me.userService.getAllDetails()
     promise.then((msg) =>{
       reply(msg).code(200)
     }, (err)=> {reply({err:err}).code(400)})
  }

  getNotfHandler(request,reply){
      const me = this

      me.notfService.getNotf(request.params.userName).then((notf)=>{
        reply(notf).code(200)
      },(err)=>{reply({err:err}).code(400)})
  }

  getUserHandler(request, reply){
    const me = this
    let promise = me.userService.getUser(request.params.userName)
    promise.then((data)=>{reply(data).code(200)},
      (err)=>{reply({}).code(400)})
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
        request.cookieAuth.set({userName : request.payload.userName})
        reply.state("username", request.payload.userName)
        reply("success").code(200)
      }
      else {
        reply({err:"Nayae check ur password nee illa da"}).code(400)
      }
  },(err)=>{reply({err:err}).code(401)})
  }
}

module.exports = UserHandlers
