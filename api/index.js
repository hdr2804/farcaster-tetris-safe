const { serve } = require("@hono/node-server")
const { app } = require("../src/index")

module.exports = serve(app)
