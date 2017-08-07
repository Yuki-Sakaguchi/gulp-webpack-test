var webpack = require('webpack');

module.exports = {
    // エントリーポイント
    entry: {
        js: __dirname + '/src/js/app.js'
    },

    // 出力設定
    output: {
        // 出力先
        path: __dirname + '/public/js',

        // 出力ファイル名
        filename: 'bundle.js'
    },

    // ソースマップ
    devtool: 'source-map',

    // プラグイン
    plugins: [
        // ミニファイ
        new webpack.optimize.UglifyJsPlugin()
    ]
}