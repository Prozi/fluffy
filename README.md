# Fluffy 🐱

## installation

`yarn install fluffy --save`

## the only docs you'll need

```javascript
// import { Fluffy } from 'fluffy'
// const { Fluffy } = require('fluffy')
var Fluffy = require('fluffy').Fluffy

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
