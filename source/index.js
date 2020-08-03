"use strict";

const getTime = require("./time").default;

function Fluffy() {
  this.totals = {};
}

Fluffy.prototype = {
  time(name) {
    if (!this.totals[name]) {
      this.totals[name] = {
        time: 0,
        count: 0,
      };
    }
    // for recursive functions
    if (!this.totals[name].from) {
      this.totals[name].from = getTime();
    }
  },
  timeEnd(name) {
    if (!this.totals[name] || !this.totals[name].from) {
      return;
    }
    this.totals[name].count++;
    this.totals[name].lastTime = getTime() - this.totals[name].from;
    this.totals[name].time += this.totals[name].lastTime;
    this.totals[name].from = null;
  },
  debug(name, minMs) {
    const total = this.totals[name];
    if (!minMs || total.lastTime > minMs) {
      return this.formatFn(name);
    }
  },
  formatFn(name) {
    const total = this.totals[name];
    return {
      name,
      last: total.lastTime,
      avg: total.count ? total.time / total.count : 0,
      sum: total.time,
    };
  },
  log(value) {
    if (value) {
      console.log(value);
    }
  },
  filterFn(name, minMs) {
    if (!this.totals[name].count) {
      return false;
    }
    if (minMs && this.totals[name].lastTime < minMs) {
      return false;
    }
    return true;
  },
  debugAll(minMs) {
    const min = minMs || 0;
    return Object.keys(this.totals).reduce((acc, stat) => {
      if (this.filterFn(stat, min)) {
        acc[stat] = this.formatFn(stat).avg;
      }
      return acc;
    }, {});
  },
};

module.exports = Fluffy;

module.exports.default = Fluffy;
