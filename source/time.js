'use strict'

// time specific constants
var s2nano = 1e9
var s2ms = 1e3
var nano2s = 1 / s2nano

// returns in ms
function getTimeNode () {
  var hrtime = process.hrtime()
  return (hrtime[0] + hrtime[1] * nano2s) * s2ms
}

// returns in ms
function getTimeModernBrowser () {
  return performance.now()
}

// returns in ms
function getTimeBrowser () {
  return Date.now()
}

module.exports = (typeof process.env !== 'undefined')
  ? getTimeNode
  : ((typeof performance !== 'undefined')
  	? getTimeModernBrowser
  	: getTimeBrowser)

module.exports.default = module.exports
