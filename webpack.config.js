const webpack = require('webpack');

module.exports = (env, argv) => {
  const config = {
    entry: './src/App.jsx',
    output: {
      path: __dirname,
      publicPath: '/',
      filename: '[name].js',
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {},
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      contentBase: './',
      hot: true,
    },
  };

  if (argv.mode === 'production') {
    config.resolve.alias.react = 'preact-compat';
    config.resolve.alias['react-dom'] = 'preact-compat';
  }

  return config;
};
