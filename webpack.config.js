const path = require('path');
const webpack = require('webpack');

// ローカルでデバッグする時のポート
const port = 8080;

// phaser の設定
const phaserModule = path.join(__dirname, '/node_modules/phaser/');
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
const pixi = path.join(phaserModule, 'build/custom/pixi.js');
const p2 = path.join(phaserModule, 'build/custom/p2.js');


// js を圧縮するか
const optimizetion = true;


// webpack の設定
const config = {

    // context: path.resolve(__dirname, 'src'),

    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'owata.js',
        // publicPath: '/dist',
    },

    module: {
        loaders: [

            // babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

            // mp3
            { test: /resource\/.+\.mp3$/, loader: "file?name=[path][name].[ext]" },

            // phaser
            { test: /p2.js/, loader: 'script-loader' },
            { test: /pixi.js/, loader: 'script-loader' },
            { test: /phaser.js/, loader: 'script-loader' }
            
        ],
    },

    // phaser
    resolve: {
        alias: {
            'phaser': phaser,
            'pixi.js': pixi,
            'p2': p2,
        }
    },

    // webpack-dev-server の設定
    devServer: {
        contentBase: path.resolve(__dirname),
        port,
        inline: true,
        hot: true,
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};


if (optimizetion) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}


module.exports = config;
