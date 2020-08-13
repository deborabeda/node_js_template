import express from 'express'

export class Server {
  configureServer() {
    const server = express();
    const port = 3000;
    server.listen(port, () => {
      console.log(`Server start on port: ${port}`)
    })
  }
}
