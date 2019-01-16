/* eslint-disable */
const withCss = require('@zeit/next-css')
const withTypescript = require('@zeit/next-typescript')

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withCss(withTypescript())
