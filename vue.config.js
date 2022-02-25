const path = require('path')

const BUILD_CONFIG = {
  productionSourceMap: false,
  chainWebpack: config => {
    config.module.rule('js').rule('vue').include.add('/packages').end()
  },
  configureWebpack: {
    output: {
      filename: 'image-preview/index.js',
      libraryTarget: 'commonjs2',
      path: path.join(__dirname, 'dist'),
      publicPath: '/'
    },
    performance: {
      hints: false
    },
    optimization: {
      minimize: true,
      minimizer: []
    }
  }
}
module.exports =
  process.env.NODE_ENV === 'development'
    ? {
        pages: {
          index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html'
          }
        },
        devServer: {
          port: 8080,
          hot: true,
          open: true,
          disableHostCheck: true
        },
        css: {
          extract: false,
          loaderOptions: {
            less: { javascriptEnabled: true }
          }
        }
      }
    : {
        ...BUILD_CONFIG,
        css: {
          extract: false,
          loaderOptions: {
            less: { javascriptEnabled: true }
          }
        }
      }
