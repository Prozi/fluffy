# Fluffy 🐱

## installation

`yarn install fluffy-memleak --save`

## test

`yarn test`

## the only docs you'll need

```javascript
// import Fluffy from 'fluffy-memleak'
// const Fluffy = require('fluffy-memleak')
var Fluffy = require('fluffy-memleak')
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
```

## Author

Jacek Pietal

## License

License: MIT
