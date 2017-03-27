/*
 需求点
 */
var webpack = require('webpack');
var path = require('path');
//定义了一些文件夹的路径

var ROOT_PATH = path.resolve(__dirname);
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');
var SRC_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },

    // 入口
    entry: {
        app: path.resolve(SRC_PATH, './entry.js'),
        lib: ['vue']
    },
    // 输出
    output: {
        path: DIST_PATH,
        filename: 'asset/[name].js',
        publicPath: ''
    },
    // 模块
    module: {
        loaders: [
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'asset/[name].[hash:6].[ext]'
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'asset/[name].[hash:6].[ext]'
                }
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.ts[x]?$/,
                loader: "ts-loader"
            }, {
                test: /\.vue$/,
                loader: 'vue'
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }]
    },
    // 定义模块别名
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['.vue', '.js', '.jsx', '.ts', '.tsx', '.json', '.less'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            // 定义目录别名, 对应的模块引用可以为 common/config,common/util,common/http
            'common': path.resolve(SRC_PATH, './common'),
            // 定义模块别名
            'config': path.resolve(SRC_PATH, './common/config'),
            //'vue$': 'vue/dist/vue',
        }
    },
    // 插件
    plugins: [
        // 把模块默认插入到全局模块中,不用一个个导入,在模块内可以直接使用
        new webpack.ProvidePlugin({
            Vue: 'vue'
        }),
        // 配置代码自动编译和热替换插件
        new webpack.HotModuleReplacementPlugin(),
        // 定义系统全局变量, 如何定义自定义的系统全局变量
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
            PRODUCTION: JSON.stringify(true),
            __VERSION__: JSON.stringify("5fa3b9"),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: "1+1",
            "typeof window": JSON.stringify("object")
        }),
    ]
};


