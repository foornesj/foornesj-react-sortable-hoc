const path = require('path');

module.exports = (env, argv) => {
  const mode = argv.mode || 'production';
  const config = {
    mode: mode,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      port: 3000,
    },
    resolve:{
      alias:{
        'foornes-react-sortable-hoc': path.resolve(__dirname, 'Sortable/index')
      }
    }
  }

  if (mode === 'development') {
    config['devtool'] = 'eval-source-map';
    config['optimization'] = {
      minimize: false,
    }
  }

  return config;
};