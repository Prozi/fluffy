# Fluffy 🐱

## installation

`yarn install fluffy-memleak --save`

## the only docs you'll need

```javascript
// import Fluffy from 'fluffy-memleak'
// const Fluffy = require('fluffy-memleak')
var Fluffy = require('fluffy-memleak')

// initialization
var a = new Fluffy()

// when you start
a.time('debug')

// do some stuff

// when finished
a.timeEnd('debug')

// check results
console.log(a.debugAll())
```

## Author

Jacek Pietal

## License

License: MIT
