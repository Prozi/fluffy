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
var fluffy = new Fluffy()

fluffy.time('0ms')
fluffy.time('500ms')
fluffy.time('1000ms')

fluffy.timeEnd('0ms')

setTimeout(() => {
  fluffy.timeEnd('500ms')
}, 500)

setTimeout(() => {
  fluffy.timeEnd('1000ms')

  // will print all that took > 250ms (500ms + 1000ms)
  fluffy.log(fluffy.debugAll(250))

  // will print this one, always
  fluffy.log(fluffy.debug('0ms'))

  // wont print anything, because it lasted 0ms < 1000ms
  fluffy.log(fluffy.debug('0ms', 1000))

  // end test
  process.exit(0)
}, 1000)
```

## Author

Jacek Pietal

## License

License: MIT
