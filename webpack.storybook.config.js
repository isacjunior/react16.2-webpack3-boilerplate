const path = require('path')

module.exports = {
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components')
    },
    modules: [ 'node_modules' ],
    extensions: ['.jsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader?cacheDirectory',
          options: {
            presets: [
              ['@babel/preset-env', { modules: false }],
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
}
