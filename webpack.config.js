

const path = require('path');


module.exports = {
  entry: {
    app: './wjquery.ts'
  },
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {

    rules: [{
      test: /\.js$/, // include .js files
         exclude: /node_modules/, // exclude any and all files in the node_modules folder
      loader: "ts-loader"
     
    }]
  },
};






