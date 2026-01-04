const { createServer } = require("@hono/node-server")
const { app } = require("../src/index")

module.exports = createServer({
  fetch: app.fetch
})
