# Fluffy 🐱

![Fluffy Logo 512px](https://github.com/Prozi/fluffy/raw/master/logo/512px.png)

## The purpose

Of course we all have Chrome Profiler, but what if...

What if we're so crazy to write a nodejs backend game?

Profiling in node has never been easier!

Just plug in relevant `fluffy.time` and `fluffy.timeEnd` similar to `console.time` and `console.timeEnd` calls in your code

It will collect the data, aggregate it, and if required at any moment (like once in a gameloop when in debugging mode)...

Print it out with `fluffy.debugAll` or to lesser extent `fluffy.debug`.

## Easy usage

```javascript
...

// before function or at start, to start counter
fluffy.time('your_function_1')
// call whatever you need, do stuff, use processor
your_function()
// after function call or at end, to end counter
fluffy.timeEnd('your_function_1')

...

// will print out if any of above functions* took more than 5ms
fluffy.debugAll(5)

...
```

## Installation

`yarn install fluffy-memleak --save`

## Test

`yarn test`

## The only docs you'll need

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

Jacek Pietal: [Prozi](https://github.com/Prozi)

Logo Author: [dee-y](https://github.com/dee-y)

## License

License: MIT

Logo License: Creative Commons Attribution 4.0 International License
