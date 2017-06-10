const  webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',

    entry:  __dirname + "/public/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/app",//打包后的文件存放的地方
        filename: "[name].js"//打包后输出文件的文件名
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options:{
                    loaders:{
                        js:'babel-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000
                    // name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },{
                test:/\.css$/,
                loader:'style-loader!css-loader?modules'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),

        new webpack.LoaderOptionsPlugin({
            options: {
                devServer: {
                    contentBase: "./app",//本地服务器所加载的页面所在的目录
                    colors: true,//终端中输出结果为彩色
                    historyApiFallback: true,//不跳转
                    inline: true,//实时刷新
                    port:8099
                }
            }
        })
    ]
}