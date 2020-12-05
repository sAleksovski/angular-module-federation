const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const CopyPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');

const IS_GH = !!process.env.GH;

const port = 5001;

const outputPath = IS_GH
  ? path.join(__dirname, './../../../dist/gh-pages/contacts-list')
  : path.join(__dirname, './../../../dist/contacts-list');

const devServer = {
  contentBase: outputPath,
  ...(IS_GH ? {} : { port }),
};

const htmlReplacementPlugin = new HtmlReplaceWebpackPlugin([
  {
    pattern: '<base href="/">',
    replacement: '<base href="/contacts-list">',
  },
]);

const ghPlugins = IS_GH ? [htmlReplacementPlugin] : [];

const publicPath = IS_GH ? '/contacts-list/' : `http://localhost:${port}/`;

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
  devServer,
  module: {
    rules: [
      { test: /\.ts$/, loader: '@ngtools/webpack' },
      {
        test: /\.css$/i,
        use: ['raw-loader'],
      },
      {
        test: /environment/,
        loader: 'file-replace-loader',
        options: {
          replacement: path.resolve(__dirname, './src/environments/environment.prod.ts'),
        },
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
        // ContactsListWidgetModule: path.resolve(__dirname, './src/app/contacts-list/contacts-list-widget.module.ts'),
      },
      shared: ['@angular/core', '@angular/common', '@angular/router', '@nd/ui-ang', '@nd/core'],
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
    ...ghPlugins,
  ],
  output: {
    // This is needed so that the shell can load the module from url, and not from local files
    publicPath,
    filename: '[name].js',
    path: outputPath,
    chunkFilename: '[id].[chunkhash].js',
  },
  mode: 'production',
};

module.exports = contactsListConfig;
