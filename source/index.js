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
    if (!this.totals[name] || !this.totals[name].from) {
      return
    }
    this.totals[name].count++
    this.totals[name].lastTime = getTime() - this.totals[name].from
    this.totals[name].time += this.totals[name].lastTime
    this.totals[name].from = null
  },
  filterFn (name) {
    return (this.totals[name].count > 0)
  },
  debugAll () {
    return Object.keys(this.totals)
      .filter(this.filterFn.bind(this))
      .map((name) => {
        var total = this.totals[name]
        return JSON.stringify({
          name,
          last: +total.lastTime.toFixed(2),
          avg: +(total.time / total.count).toFixed(2),
          sum: +total.time.toFixed(2)
        })
      }
    ).join(', ')
  }
}

module.exports = Fluffy

module.exports.default = Fluffy
