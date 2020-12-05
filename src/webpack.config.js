const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const CopyPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const IS_GH = !!process.env.GH;

const port = 5000;

const outputPath = IS_GH
  ? path.join(__dirname, './../dist/gh-pages')
  : path.join(__dirname, './../dist/angular-module-federation');

const devServer = {
  contentBase: outputPath,
  ...(IS_GH ? {} : { port }),
};

const localRemotes = {
  ContactsList: 'ContactsList@http://localhost:5001/remoteEntry.js',
  ContactsDetails: 'ContactsDetails@http://localhost:5002/remoteEntry.js',
  Newsfeed: 'Newsfeed@http://localhost:5003/remoteEntry.js',
};

const ghRemotes = {
  ContactsList: 'ContactsList@/contacts-list/remoteEntry.js',
  ContactsDetails: 'ContactsDetails@/contacts-details/remoteEntry.js',
  Newsfeed: 'Newsfeed@/newsfeed/remoteEntry.js',
};

const remotes = IS_GH ? ghRemotes : localRemotes;

const shellConfig = {
  entry: [
    path.resolve(__dirname, './polyfills.ts'),
    path.resolve(__dirname, './main.ts'),
    path.resolve(__dirname, './styles.css'),
  ],
  resolve: {
    mainFields: ['browser', 'module', 'main'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.app.json'),
      }),
    ],
  },
  devServer,
  module: {
    rules: [
      { test: /\.ts$/, loader: '@ngtools/webpack' },
      {
        test: /\.css$/,
        use: ['raw-loader'],
      },
      {
        test: /environment/,
        loader: 'file-replace-loader',
        options: {
          replacement: path.resolve(__dirname, './environments/environment.prod.ts'),
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes,
      shared: ['@angular/core', '@angular/common', '@angular/router', '@nd/ui-ang'],
    }),
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: './tsconfig.app.json',
      directTemplateLoading: true,
      entryModule: path.resolve(__dirname, './app/app.module#AppModule'),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, './assets'), to: 'assets' },
        { from: path.resolve(__dirname, './styles.css'), to: '' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
    }),
  ],
  output: {
    publicPath: '',
    filename: '[id].[name].js',
    path: outputPath,
    chunkFilename: '[id].[chunkhash].js',
  },
  mode: 'production',
};

module.exports = shellConfig;
