//const Schemas     = require('../Schemas')
const Handlers    = require('./Handlers')

class RoutesRegistrar {
  constructor() {
      this.handlers = new Handlers()
  }
  registerRoutes(server){
      const me      = this
      console.log( 'Registering routes...')

      server.route({
        method  : 'POST',
        path    : '/add_user/',
        config  : {
          description : 'Add new user',
          tags        : ['api'],
          handler     : (request, reply) =>me.handlers.newUserHandler(request, reply)
        }
      })

  }
}

module.exports = RoutesRegistrar
