const path = require('path')
const fs = require('fs')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');


const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
};

const PAGES_DIR = `${PATHS.src}`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
  externals: {
    paths: PATHS,
    // jquery: 'jQuery'
  },
  entry: {
    app: PATHS.src,
    colorstype: `${PATHS.src}/uikit/colorstype/colorstype.js`,
    formelements: `${PATHS.src}/uikit/formelements/formelements.js`,
    cards: `${PATHS.src}/uikit/cards/cards.js`,
    headersfooters: `${PATHS.src}/uikit/headersfooters/headersfooters.js`,
    landing_page: `${PATHS.src}/pages/landing-page/landing-page.js`,
    search_room: `${PATHS.src}/pages/search-room/search-room.js`,
    room_details: `${PATHS.src}/pages/room-details/room-details.js`,
    registration: `${PATHS.src}/pages/registration/registration.js`,
    login: `${PATHS.src}/pages/login/login.js`
  },
  output: {
    path: PATHS.build,
    filename: `${PATHS.assets}js/[name].js`,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }, {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }, {
        test: /\.pug$/,
        loader: 'pug-loader'
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true}
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: './postcss.config.js' } }
          }, {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }, {
        test: /\.css$/,
        use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: './postcss.config.js' } }
        }
      ]
      }
    ]
  },

  plugins: [

    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[hash].css`,
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/${PATHS.assets}/fonts`, to: `${PATHS.assets}fonts` },
      { from: `${PATHS.src}/components`, to: `${PATHS.assets}img`, flatten:true, ignore:['*.html', '*.pug', '*.css', '*.scss', '*.js'] },
      { from: `${PATHS.src}/pages`, to: `${PATHS.assets}img`, flatten:true, ignore:['*.html', '*.pug', '*.css', '*.scss', '*.js'] }
    ]),


    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    })),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/index.pug`,
      filename: './index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/uikit/colorstype/colorstype.pug`,
      chunks: ["colorstype"],
      filename: './uikit/colorstype.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/uikit/formelements/formelements.pug`,
      chunks: ["formelements"],
      filename: './uikit/formelements.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/uikit/cards/cards.pug`,
      chunks: ["cards"],
      filename: './uikit/cards.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/uikit/headersfooters/headersfooters.pug`,
      chunks: ["headersfooters"],
      filename: './uikit/headersfooters.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/pages/landing-page/landing-page.pug`,
      chunks: ["landing_page"],
      filename: './pages/landing-page.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/pages/search-room/search-room.pug`,
      chunks: ["search_room"],
      filename: './pages/search-room.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/pages/room-details/room-details.pug`,
      chunks: ["room_details"],
      filename: './pages/room-details.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/pages/registration/registration.pug`,
      chunks: ["registration"],
      filename: './pages/registration.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/pages/login/login.pug`,
      chunks: ["login"],
      filename: './pages/login.html',
      inject: true
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
    }),

    // new HtmlWebpackExternalsPlugin({
    //   externals: [
    //     {
    //       module: 'jquery',
    //       entry: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js',
    //       global: 'jQuery',
    //     }
    //   ]
    // }),
  ]
}
