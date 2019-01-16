const withTypescript = require('@zeit/next-typescript')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
/**
 * next的配置文件，支持配置嵌套
 */
module.exports = withTypescript({
  webpack(config, options) {
    // if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin())
    return config
  }
})