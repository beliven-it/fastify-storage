# fastify-storage

An abstraction over storage providers

![Node.js CI](https://github.com/heply/fastify-storage/workflows/Node.js%20CI/badge.svg)

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

[![Beliven](https://assets.beliven.com/brand/logo_pos_color.svg)](https://www.beliven.com)

## License

Licensed under [MIT](./LICENSE)
