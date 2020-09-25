# fastify-storage

An abstraction over storage providers

## Install

```bash
$ npm i --save fastify-storage
```

## Usage

```js
fastify.register(require('fastify-storage'))

// ...

const disk = await fastify.storage.disk('local')

await disk.put('bar.txt', 'Foobar')
```

## Methods

Take a look at [Flydrive docs](https://github.com/Slynova-Org/flydrive/blob/develop/README.md).

## Options

Take a look at [Flydrive docs](https://github.com/Slynova-Org/flydrive/blob/develop/examples/config.ts).

## Test

```bash
$ npm test
```

## Acknowledgements

This project is kindly sponsored by:

[![heply](https://raw.githack.com/heply/brand/master/heply-logo.svg)](https://www.heply.it)

## License

Licensed under [MIT](./LICENSE)