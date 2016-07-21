'use strict'

const percentiles = module.exports.percentiles = [
  50,
  75,
  90,
  99,
  99.9,
  99.99,
  99.999
]

module.exports.histAsObj = function (hist, total) {
  const mean = Math.ceil(hist.mean() * 100) / 100
  const result = {
    average: mean, // added for backward compat with wrk
    mean: mean,
    stddev: Math.ceil(hist.stddev() * 100) / 100,
    min: hist.min(),
    max: hist.max()
  }

  if (typeof total === 'number') {
    result.total = total
  }

  return result
}

module.exports.addPercentiles = function (hist, result) {
  percentiles.forEach(function (perc) {
    const key = ('p' + perc).replace('.', '')
    result[key] = hist.percentile(perc)
  })

  return result
}
