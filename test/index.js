var Fluffy = require('../source')
var a = new Fluffy()

a.time('1000ms')
a.time('0ms')

setTimeout(() => {
	a.timeEnd('1000ms')
	console.log(a.debugAll())
	process.exit(0)
}, 1000)

a.timeEnd('0ms')
console.log(a.debugAll())
