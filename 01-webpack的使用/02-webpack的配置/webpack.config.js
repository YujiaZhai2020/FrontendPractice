const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        //需要动态的获取到绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.css$/,
            //css-loader只负责加载不负责解析，需要用style-loader解析
            use: ['style-loader', 'css-loader']
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}