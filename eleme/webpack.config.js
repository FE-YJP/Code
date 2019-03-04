var path = require('path');

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  },
  module: {
	  rules: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['es2015','react']
	        }
	      }
	    },
	    {
	        test: /\.css$/,
	        use: [ 'style-loader', 'css-loader' ]
	    },
	    {
	        test: /\.(png|jpg|gif|ttf|woff|woff2|svg|eot)$/,
	        use: [
	          {
	            loader: 'url-loader',
	            options: {
	              limit: 8192
	            }
	          }
	        ]
	      }
	  ]
	},
	devServer: {
	  contentBase: path.join(__dirname, "dist"),
	  compress: true,
	  port: 9000,
	  inline:true
	}
};