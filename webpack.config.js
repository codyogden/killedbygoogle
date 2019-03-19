const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  const config = {
    entry: './src/App.jsx',
    output: {
      path: path.resolve(__dirname, 'public'),
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
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]',
          },
        },
      },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {},
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new CopyPlugin([
        { from: './graveyard.json', to: './' },
        { from: './src/assets/social', to: './assets/social' },
        { from: './src/assets/favicon.png', to: './assets' },
        { from: './src/index.html', to: './' },
      ]),
    ],
    devServer: {
      contentBase: './public',
      hot: true,
    },
  };

  if (argv.mode === 'production') {
    config.resolve.alias.react = 'preact-compat';
    config.resolve.alias['react-dom'] = 'preact-compat';
  }

  return config;
};
