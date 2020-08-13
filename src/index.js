import { Server } from './server/server'

const server = new Server()
module.exports.handler = server.configureServer();
