'use strict'

const test = require('tap').test
const Histogram = require('native-hdr-histogram')
const histPercentileObj = require('./')

test('should return a valid hist as object', (t) => {
  t.plan(16)
  const histogram = new Histogram(1, 100)
  let total = 0
  for (let i = 0; i < 10000; i++) {
    let num = Math.floor(Math.random() * 100)
    histogram.record(num)
    total += num
  }

  // any of the numbers below _could_ be 0, so we do a type test instead of t.ok
  const result = histPercentileObj.histAsObj(histogram, total)
  t.ok(result)
  t.type(result.average, 'number')
  t.type(result.mean, 'number')
  t.type(result.stddev, 'number')
  t.type(result.min, 'number')
  t.type(result.max, 'number')
  t.type(result.total, 'number')

  const withPercentiles = histPercentileObj.addPercentiles(histogram, result)
  t.ok(withPercentiles)
  t.type(withPercentiles.average, 'number')
  t.type(withPercentiles.p50, 'number')
  t.type(withPercentiles.p75, 'number')
  t.type(withPercentiles.p90, 'number')
  t.type(withPercentiles.p99, 'number')
  t.type(withPercentiles.p999, 'number')
  t.type(withPercentiles.p9999, 'number')
  t.type(withPercentiles.p99999, 'number')
})
