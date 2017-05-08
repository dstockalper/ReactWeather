var webpack = require('webpack');

module.exports = {
  entry: [ // Where webpack starts compiling the bundle file; the first file webpack looks in for required modules and components, and adds them to bundle.js
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery', // Let Foundation properly attach methods to the jQuery object
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js' // location and name of file to be created
  },
  resolve: {
    root: __dirname,
    alias: { // pick names for our components and tell webpack where to find those components...enables shorter require('') paths
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx'

    },
    extensions: ['', '.js', '.jsx'] // file extensions to recognize
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map' // Creates "source maps" that allows developer to debug own code and not the bundled code that was transformed by webpack
};

// Due to a library bug there is a small issue in the next video. In the next lecture you'll learn how to setup source maps by setting a "devtool" property in webpack.config.js. In the lecture I set the value to "cheap-module-eval-source-map". This might cause the source maps to not work as shown in the video.
//
// If you are getting this error, try setting the value to either "inline-source-map" or "eval-source-map" instead.
