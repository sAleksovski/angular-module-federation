const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const CopyPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const outputPath = path.join(__dirname, './../../../dist/contacts-list');

const contactsListConfig = {
  entry: [path.resolve(__dirname, './src/polyfills.ts'), path.resolve(__dirname, './src/main.ts')],
  resolve: {
    mainFields: ['browser', 'module', 'main'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, './tsconfig.app.json'),
      }),
    ],
  },
  devServer: {
    contentBase: outputPath,
    port: 5000,
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: '@ngtools/webpack' },
      {
        test: /\.css$/i,
        use: ['raw-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'ContactsList',
      library: { type: 'var', name: 'ContactsList' },
      filename: 'remoteEntry.js',
      exposes: {
        './ContactsListModule': path.resolve(__dirname, './src/app/contacts-list/contacts-list.module.ts'),
      },
      shared: ['@angular/core', '@angular/common', '@angular/router', '@nd/ui-ang'],
    }),
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: path.resolve(__dirname, './tsconfig.app.json'),
      directTemplateLoading: true,
      entryModule: path.resolve(__dirname, './src/app/app.module#AppModule'),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, './src/assets'), to: 'assets' },
        { from: path.resolve(__dirname, './src/styles.css'), to: '' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],
  output: {
    // This is needed so that the shell can load the module from url, and not from local files
    publicPath: 'http://localhost:5000/',
    filename: '[name].js',
    path: outputPath,
    chunkFilename: '[id].[chunkhash].js',
  },
  mode: 'development',
};

module.exports = contactsListConfig;