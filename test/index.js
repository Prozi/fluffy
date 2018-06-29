var Fluffy = require('../source')

var a = new Fluffy()

a.time('debug')
a.timeEnd('debug')

console.log(a.debugAll())

process.exit(0)
