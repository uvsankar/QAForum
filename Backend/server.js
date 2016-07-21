const hapi              = require('hapi')
const config            = require('./Config/config.json')
const RoutesRegistrar   = require('./Routes/RoutesRegistrar')
const Inert             = require('inert');
const Vision            = require('vision');
const HapiSwagger       = require('hapi-swagger');

const server            = new hapi.Server()


server.connection(config.server)

let routesRegistrar     = new RoutesRegistrar()
routesRegistrar.registerRoutes(server)

const hapiSwaggerOptions = {
    info: {
            'title': 'Test API Documentation'
        }
    }
server.register([
    Inert,
    Vision,
    {
        'register': HapiSwagger,
        'options': hapiSwaggerOptions
    }], (err) => {
        server.start( (err) => {
           if (err)
                throw err
           console.log('Server running at:', server.info.uri);

        })
    })
console.log("hello world")
