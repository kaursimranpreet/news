"use strict";

const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    "react-hot-loader",
                    "babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0"
                ]
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015"]
                }
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass!sass-resources"
            },
            {
                test: /bootstrap\/dist\/js\/umd\//,
                loader: "imports?jQuery=jquery"
            },
            { test: /\.(woff2?|svg)$/, loader: "url?limit=10000" },
            { test: /\.(ttf|eot)$/, loader: "file" }
        ]
    },
    plugins: [
        new HtmlPlugin({
            title: "CustomTitle",
            template: "index.html", // Load a custom template
            inject: "body" // Inject all scripts into the body
        })
    ],
    entry: "./src/index.js",
    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js",
        resolve: {
            extensions: ["", ".js", ".jsx"]
        }
    },
    devServer: {
        disableHostCheck: true
    }
};
