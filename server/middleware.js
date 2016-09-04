const path = require('path')
var mime = require('mime-types')

module.exports = [
  function * (next) {
    this.response.set('Content-Type', mime.lookup(path.extname(this.path)) || 'text/html')
    yield next
  }
]
