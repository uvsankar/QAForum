const Schemas     = require('../Schemas/RestSchema')
const Handlers    = require('./Handlers')

class RoutesRegistrar {
  constructor() {
      this.handlers = new Handlers()
  }
  registerRoutes(server){
      const me      = this
      console.log( 'Registering routes...')

      server.route({
        method  : 'GET',
        path    : '/',
        config  : {
          handler   : (request, reply) => {reply("landing page")}
        }
      })

      server.route({
        method  : 'GET',
        path    : '/login/',
        config  : {
          description   : 'login Page ',
          handler       : (request, reply) => { reply("not yet implemented")}
        }
      })

      server.route({
        method  : "POST",
        path    : '/login/',
        config  : {
          description   : 'loging API',
          tags          : ['api'],
          validate      :{
            payload : Schemas.authSchema
          },
          handler       : (request,reply) => me.handlers.loginHandler(request, reply)
        }
      })

      server.route({
        method  : 'POST',
        path    : '/add_user/',
        config  : {
          description : 'Add new user',
          tags        : ['api'],
          auth        : {
            mode        : 'required',
            strategy    : 'session'
          },
          validate    : {
            payload :  Schemas.add_user
          },
          handler     : (request, reply) =>me.handlers.newUserHandler(request, reply)
        }
      })

      server.route({
        method  : 'PUT',
        path    : '/update_user/',
        config  : {
          description : 'Update the user details',
          tags        : ['api'],
          validate    : {
            payload : Schemas.userSchema
          },
          handler     : (request, reply) => me.handlers.updateUserHandler(request, reply)
        }
      })

  }
}

module.exports = RoutesRegistrar
