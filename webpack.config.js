const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ROOT = path.resolve(__dirname)
const DIST = path.resolve(ROOT, './dist')
const SRC_ROOT = path.resolve(ROOT, './src')
const PAGES_ROOT = path.resolve(SRC_ROOT, './pages')

const webpackConfig = {
  entry: {}, // 動的に生成

  output: {
    path: path.resolve('dist'),
    publicPath: DIST,
    filename: '[name]'
  },

  devServer: {
    contentBase: DIST,
    port: 9000
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options:{
            presets:["@babel/preset-env"]
          }
        }]
      },
      { test: /\.vue$/, loader: 'vue-loader'},
      { test: /\.css$/, use: [ 'vue-style-loader', 'css-loader' ]}
    ]
  },

  resolve: {
    alias: {
      components: path.resolve(SRC_ROOT, './components'),
      pages: path.resolve(SRC_ROOT, './pages')
    }
  },

  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      Vue: ['vue/dist/vue.esm.js', 'default']
    }),
  ],

  optimization: {
    splitChunks: {
      name: 'vendor.js',
      chunks: 'initial'
    }
  }
}

glob.sync('**/**/*.js', {
  cwd: PAGES_ROOT,
}).forEach(jsPathName => {
  const dirName = jsPathName.split("/")[0]
  const jsFileName = `${dirName}.js`
  const htmlFileName = `${dirName}.html`
  webpackConfig.entry[jsFileName] = path.resolve(PAGES_ROOT, `${dirName}/index`)

  webpackConfig.plugins.push(new HtmlWebpackPlugin({
    template: path.resolve(PAGES_ROOT, `${dirName}/index.html`),
    filename: htmlFileName,
    inject: 'body',
    includeSiblingChunks: true,
    chunks: ['vendor.js', jsFileName]
  }))
})

module.exports = webpackConfig