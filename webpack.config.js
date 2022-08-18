const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        universities: './docs/universities.js',
        events: './docs/events.js',
        login: './src/login.js'
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'index.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [ 
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}