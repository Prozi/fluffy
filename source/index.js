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
  debug (name, minMs) {
    var total = this.totals[name]
    if (!minMs || (total.lastTime > minMs)) {
      return this.formatFn(name)
    }
  },
  formatFn (name) {
    var total = this.totals[name]
    if (total.count > 0) {
      return JSON.stringify({
        name,
        last: +total.lastTime.toFixed(2),
        avg: +(total.time / total.count).toFixed(2),
        sum: +total.time.toFixed(2)
      })
    }
  },
  log (value) {
    if (value) {
      console.log(value)
    }
  },
  filterFn (name, minMs) {
    if (!this.totals[name].count) {
      return false
    }
    if (minMs && (this.totals[name].lastTime < minMs)) {
      return false
    }
    return true
  },
  debugAll (minMs) {
    var fluffy = this
    var min = minMs || 0
    return Object.keys(this.totals)
      .filter(function (name) {
        return fluffy.filterFn(name, min)
      })
      .map(this.formatFn.bind(this))
      .join(', ')
  }
}

module.exports = Fluffy

module.exports.default = Fluffy
