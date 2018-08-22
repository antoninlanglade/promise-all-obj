# promise-all-obj
Promise All from Object

<br><br>

## Requirements
- Polyfill Promise on old browsers

<br>

## Features
- Promise.all({...})

<br>

## Module Installation

```sh
$ npm install --save @antoninlanglade/promise-all-obj
```

<br>

## Usage

```js
import PromiseAllObj from '@antoninlanglade/promise-all-obj' // web
// or
const PromiseAllObj = require('@antoninlanglade/promise-all-obj') // node

var testObj = {
  promise1: new Promise((res, rej) => {
    setTimeout(() => res('p1'), 2000)
  }),
  promise2: new Promise((res, rej) => res('p3'))
};

PromiseAllObj(testObj)
  .then((results) => console.log(results)) // {promise1: 'p1', promise2: 'p2'}
  .catch((err) => console.log(err)) // Errors
```

<br>

## License
[MIT.](LICENSE)