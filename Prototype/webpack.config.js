const webpack     = require('webpack')


module.exports = {
  context:__dirname,
  entry:{
    app:'./app.js',
    vendor:[
      'angular',
      './Vendor/sb-admin-2.js'
    ]
  },
  styleLoader:require('extract-text-webpack-plugin').extract('style-loader',
  'css-loader!less-loader'  ),
  loaders:[
    {
      test:/\.css$/,
      loader:"style!css"
    },
    {
      test:/\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader:"url-loader?limit=10000&minetype=application/font-woff"
    },
    {
      test:/\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader:"file-loader"
    },
    {
      test:/\.ttf$/,
      loader:"file-loader"
    },
    {
      test:/\.eot$/,
      loader:"file-loader"
    },
    {
      test:/\.svg$/,
      loader:"file-loader"
    }
  ],
  provide:{
    $:"../node_modules/jquery/dist/jquery.js",
    jQuery:"../node_modules/jquery/dist/jquery.js"
  },
  output:{
    path:__dirname + '/js',
    filename:'app.bundle.js'
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor",
    /* filename= */"vendor.bundle.js")
  ]
};
