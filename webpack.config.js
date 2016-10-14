module.exports = {
  entry: {
    app: ['./src/app.js'],
  },
  output: {
    path:     __dirname + '/build/',
    filename: 'bundle.js',
  },
  resolve: {
    root: __dirname + '/src/',
  },
  module: {   
  loaders: [{
              test: /\.js$/,
              exclude: '/node_modules/',
              loader: 'babel',
              query: { presets: ['es2015'], compact: false, }    
        }, 
        { loader: 'url-loader?limit=100000', test: /.(png|woff|woff2|eot|ttf|svg)$/ },
        {    test: /\.css$/,    loader: 'style-loader!css-loader' },
        {    test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,    loader: 'file-loader',  },
        {     test: /\.html$/,    loader: 'raw'  }]
  }
};