const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: "./src/controller/indexcontroller.js",
        collectiondetails: "./src/controller/collectiondetailscontroller.js",
        restaurantdetails:"./src/controller/restaurantdetailscontroller.js",
        usercollection:"./src/controller/usercollectioncontroller.js",
        collectionitems:"./src/controller/collectionitemcontroller.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
      //  new HtmlWebpackPlugin({ template: 'index.html' }),
        new HtmlWebpackPlugin({
            hash: true,
            template: 'index.html',
            chunks: ['index'],
            filename: 'index.html' //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: 'collectiondetails.html',
            chunks: ['collectiondetails'],
            filename: 'collectiondetails.html' 
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: 'restaurantdetails.html',
            chunks: ['restaurantdetails'],
            filename: 'restaurantdetails.html' 
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: 'usercollection.html',
            chunks: ['usercollection'],
            filename: 'usercollection.html' 
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: 'collectionitems.html',
            chunks: ['collectionitems'],
            filename: 'collectionitems.html' 
        })
    ],
    module: {
        rules: [
            /*{
                    enforce: 'pre',
                     test: /\.js$/,
                     exclude: /node_modules/,
                      use: 'eslint-loader'
                    },*/
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /(\.css|\.scss)$/,
            exclude: /node_modules/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS
            ]
                
         
        },
        {
            
                test: /\.(?:svg|jpg|png|jpeg)$/,
                loader: 'url-loader?name=/images/[name].[ext]"',
                query: {
                  // Inline images smaller than 10kb as data URIs
                  limit: 10000
                
        }
    }]

    }
};