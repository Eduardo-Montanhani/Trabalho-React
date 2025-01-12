const path = require('path')//biblioteca nativa do node

const jsonServer = require('json-server')

const server = jsonServer.create()

const router = jsonServer.router(
  path.join(__dirname, 'db.json')//dirname pega o caminho ate onde ela está
)

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

server.listen(3001, () => {
  console.log('JSON Server iniciou com sucesso')
})
