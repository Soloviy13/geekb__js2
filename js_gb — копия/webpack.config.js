const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',

    entry: {
        main: path.resolve(__dirname, './#src/index.js')
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Geek brains js',
            template: path.resolve(__dirname, './public/template.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }, ],
    },
}