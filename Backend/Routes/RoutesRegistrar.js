const Schemas           = require('../Schemas/RestSchema')
const UserHandlers      = require('./UserHandlers')
const QAHandlers        = require('./QAHandlers')
const Path              = require('path')

class RoutesRegistrar {
  constructor() {
      this.userHandlers     = new UserHandlers()
      this.qaHandlers       = new QAHandlers()
  }
  registerRoutes(server){
      const me      = this
      console.log( 'Registering routes...')

      server.route({
        method  : 'GET',
        path    : '/user/{userName}/notfications/',
        config  : {
          description : 'Get notifications for the user',
          tags        : ['api'],
          handler     : (request, reply) => {me.userHandlers.getNotfHandler(request, reply)}
        }
      })

      server.route({
        method  : 'GET',
        path    : '/user/list/',
        config  : {
          description : 'Get users and topics list',
          tags        : ['api'],
          handler     : (request, reply) => {me.userHandlers.getAllDetailsHandler(request, reply)}
        }
      })

      server.route({
        method  : 'GET',
        path    : '/user/{userName}/',
        config  : {
          tags          : ['api'],
          description   : 'Get user info ',
          handler       : (request, reply) => { me.userHandlers.getUserHandler(request, reply)}
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
          handler       : (request,reply) => me.userHandlers.loginHandler(request, reply)
        }
      })

      server.route({
        method  : 'POST',
        path    : '/user/',
        config  : {
          description : 'Add new user',
          tags        : ['api'],
          validate    : {
            payload :  Schemas.add_user
          },
          handler     : (request, reply) =>me.userHandlers.newUserHandler(request, reply)
        }
      })

      server.route({
        method  : 'PUT',
        path    : '/user/',
        config  : {
          description : 'Update the user details',
          tags        : ['api'],
          auth        : {
            mode        : 'required',
            strategy    : 'session'
          },
          validate    : {
            payload : Schemas.userSchema
          },
          handler     : (request, reply) => me.userHandlers.updateUserHandler(request, reply)
        }
      })

      server.route({
        method  : 'POST',
        path    : '/question/',
        config  : {
          description : 'Add new Question',
          tags        : ['api'],
          auth        : {
            mode        : 'required',
            strategy    : 'session'
          },
          validate    : {
            payload : Schemas.questions
          },
          handler     : (request, reply) => me.qaHandlers.addQuestionHandler(request, reply)
        }
      })

      server.route({
        method  : 'POST',
        path    : '/question/{qId}/answer/',
        config  : {
          description : 'Add new answer',
          tags        : ['api'],
          auth        : {
            mode        : 'required',
            strategy    : 'session'
          },
          validate    : {
            payload : Schemas.answers
          },
          handler     : (request, reply) => me.qaHandlers.addAnswerHandler(request, reply)
        }
      })

      server.route({
        method  : 'PUT',
        path    : '/question/{qId}/',
        config  : {
          description : 'Popularity update, question close/open are handled in this API',
          tags        : ['api'],
          auth        : {
            mode        : 'required',
            strategy    : 'session'
          },
          validate    : {
            payload : Schemas.qa_update
          },
          handler     : (request, reply) => me.qaHandlers.qaUpdateHandler(request, reply)
        }
      })

      server.route({
        method  : 'POST',
        path    : '/question/search/',
        config  : {
          description : 'Get Questions based on given conditions',
          tags        : ['api'],
        //  validate    : {
        //    payload : Schemas.answers
        //  },
          handler     : (request, reply) => me.qaHandlers.getQuestionsHandler(request, reply)
        }
      })

      server.route({
        method  : 'GET',
        path    : '/question/{qId}/',
        config  : {
          description : 'Get all the answers for the given qID',
          tags        : ['api'],
          handler     : (request, reply) => me.qaHandlers.getQuestionsHandler(request, reply)
        }
      })

  }
}

module.exports = RoutesRegistrar
