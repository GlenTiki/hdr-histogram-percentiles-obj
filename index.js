const percentiles = [
  50,
  75,
  90,
  99,
  99.9,
  99.99,
  99.999
]

module.exports.histAsObj = function (hist, total) {
  const result = {
    average: Math.ceil(hist.mean() * 100) / 100,
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

