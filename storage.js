'use strict'

const fp = require('fastify-plugin')
const { StorageManager } = require('@slynova/flydrive')

module.exports = fp(function (fastify, opts, next) {
  const storage = new StorageManager(opts)

  fastify.decorate('storage', storage)

  next()
})
