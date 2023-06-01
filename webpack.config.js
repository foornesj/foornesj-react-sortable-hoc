const path = require('path');

module.exports = (env, argv) => {
  const mode = argv.mode || 'production';
  const config = {
    mode: mode,
    entry: './Sortable/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'index.js',
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
      static: path.resolve(__dirname, 'build'),
      port: 3000,
    },
    resolve:{
      alias:{
        'foornes-react-sortable-hoc': path.resolve(__dirname, 'build')
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