'use strict'

var getTime = require('./time').default

function Fluffy () {
  this.totals = {}
}

Fluffy.prototype = {
  time (name) {
    if (!this.totals[name]) {
      this.totals[name] = {
        time: 0,
        count: 0
      }
    }
    // for recursive functions
    if (!this.totals[name].from) {
      this.totals[name].from = getTime()
    }
  },
  timeEnd (name) {
    this.totals[name].count++
    this.totals[name].time += getTime() - this.totals[name].from
    this.totals[name].from = null
  },
  debugAll () {
    return Object.keys(this.totals).map((name) => {
      var total = this.totals[name]
      return `🕒 ~ ${name}: ${total.time.toFixed(2)} (${(total.time / total.count).toFixed(2)})`
    }
    ).join(', ')
  }
}

module.exports = Fluffy

module.exports.default = Fluffy
