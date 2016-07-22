const hapi              = require('hapi')
const config            = require('./Config/config.json')
const RoutesRegistrar   = require('./Routes/RoutesRegistrar')
const Inert             = require('inert');
const Vision            = require('vision');
const HapiSwagger       = require('hapi-swagger');
const CookieAuth        = require('hapi-auth-cookie')

const server            = new hapi.Server()


server.connection(config.server)

let routesRegistrar     = new RoutesRegistrar()

const hapiSwaggerOptions = {
    info: {
            'title': 'Test API Documentation'
        }
    }
server.register([
    CookieAuth,
    Inert,
    Vision,
    {
        'register': HapiSwagger,
        'options': hapiSwaggerOptions
    }], (err) => {

        server.auth.strategy('session', 'cookie', config.authCookie)
        routesRegistrar.registerRoutes(server)
        server.start( (err) => {
           if (err)
                throw err
           console.log('Server running at:', server.info.uri);

        })
    })
console.log("hello world")
