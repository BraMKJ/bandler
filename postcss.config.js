
const postcsspxtorem = require('postcss-pxtorem')
const postcsscalc = require('postcss-calc')

module.exports = function () {
  let plugins = [
    postcsspxtorem({
      propList: ['*', '!background-size'],
      rootValue: 16,
      unitPrecision: 5,
      minPixelValue: 2,
      replace: true,
      mediaQuery: true
    }),
    postcsscalc({
      precision: 2
    })
  ]

  return {plugins}
}
