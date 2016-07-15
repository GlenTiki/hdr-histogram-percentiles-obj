# hdr-histogram-percentiles-obj

## Install

```
npm install --save hdr-histogram-percentiles-obj
```

## Usage

```js
const histPercentileObj = require('hdr-histogram-percentiles-obj')
const Histogram = require('native-hdr-histogram')

const histogram = new Histogram(1, 100)
const total = 0
// record some histogram data...
// total++...

const result = histPercentileObj.histAsObj(histogram, total)
const resultWithPercentiles = histPercentileObj.addPercentiles(histogram, histPercentileObj.histAsObj(histogram, total))
```

## API

hdr-histogram-percentiles-obj has two utility functions to use

### histAsObj(histogram, total)

* `histogram`: A native-hdr-histogram object you want to get some values from in a js object
* `total`: the total amount recorded by the histogram, optional

Returns a json object with the `min`, `max`, `average` (mean) and `stddev`

### addPercentiles(histogram, histAsObjResult)

* `histogram`: A native-hdr-histogram object you want to retrieve the percentiles from
* `histAsObjResult`: the result returned when `histAsObj` is called on some native-hdr-histogram object

Returns the histAsObjResult with the percentiles properties added

## Sponsor

Kindly sponsored by [nearForm](www.nearform.com)

## License

[MIT](./LICENSE)
