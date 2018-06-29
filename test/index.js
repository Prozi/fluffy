var Fluffy = require('../source')
var a = new Fluffy()

a.time('name: 1s')
a.time('name: ~0ms')

setTimeout(() => {
	a.timeEnd('name: 1s')
	console.log(a.debugAll())
	process.exit(0)
}, 1000)

a.timeEnd('name: ~0ms')
console.log(a.debugAll())
