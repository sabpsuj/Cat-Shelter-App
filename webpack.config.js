module.exports = {
    entry: "./js/app.jsx",
    output: {
        filename: "./js/out.js"
    },
    watch: true,
    devtool: 'source-map',
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-2','react']
            }
        }]
    }
}