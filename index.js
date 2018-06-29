'use strict'

module.exports = {
  Fluffy: require('./source/index.js').default,
  getTime: require('./source/time.js').default
}

module.exports.default = Fluffy

