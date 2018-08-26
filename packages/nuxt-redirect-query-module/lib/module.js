const url = require('url')

const middleware = (req, res, next) => {
  req.query = url.parse(req.url, true).query
  const { redirect_to } = req.query || {}
  if (!redirect_to || redirect_to[0] !== '/' || redirect_to.match(/(\.\.)/)) {
    return next()
  }
  res.writeHead(302, {
    Location: redirect_to
  })
  res.end()
}

module.exports = function myModule () {
  this.addServerMiddleware(middleware)
}

module.exports.meta = require('../package.json')
