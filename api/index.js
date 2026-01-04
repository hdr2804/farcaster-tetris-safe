const { app } = require("../src/index")

module.exports = async function handler(req, res) {
  const response = await app.fetch(req)

  res.statusCode = response.status
  response.headers.forEach((value, key) => {
    res.setHeader(key, value)
  })

  const body = await response.arrayBuffer()
  res.end(Buffer.from(body))
}
