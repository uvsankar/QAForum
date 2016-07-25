const hapi              = require('hapi')
const config            = require('./Config/config.json')
const RoutesRegistrar   = require('./Routes/RoutesRegistrar')
const Inert             = require('inert')
const Vision            = require('vision')
const HapiSwagger       = require('hapi-swagger')
const CookieAuth        = require('hapi-auth-cookie')

const server            = new hapi.Server()
const NotfService       = require('./Services/NotfService')

server.connection(config.server)

let routesRegistrar     = new RoutesRegistrar()

server.register([
    CookieAuth,
    Inert,
    Vision,
    {
        'register': HapiSwagger,
        'options': config.hapiSwaggerOptions
    }], (err) => {

        server.auth.strategy('session', 'cookie', config.authCookie)
        routesRegistrar.registerRoutes(server)
        server.start( (err) => {
           if (err)
                throw err
           new NotfService().subscribeToDb()
           console.log('Server running at:', server.info.uri);

        })
    })
console.log("hello world")
