'use strict'

const { test } = require('tap')
const Fastify = require('fastify')

const buildApp = function (t) {
  const fastify = Fastify({ logger: { level: 'error' } })

  t.tearDown(() => fastify.close())

  return fastify
    .register(require('../storage'))
    .ready()
    .then(() => fastify)
}

test('fastify.storage', async t => {
  const fastify = await buildApp(t)

  t.test('is registered', t => {
    t.plan(1)
    t.equal(typeof fastify.storage, 'object', 'as a global object')
  })
})
