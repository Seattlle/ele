const  webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
/*
* 系统当前运行命令
* */
var currentTarget=process.env.npm_lifecycle_event;

var devServer=false;
if(currentTarget=="dev"){
    devServer=true;
}

/**
 *主文件入口
 */
var entry={
    index:__dirname + "/src/components/main.js",
    common:[
        __dirname + "/src/javascript/base.js"
    ]
};

/**
 * 文件输出
 * * */
var output={
  path:__dirname+"/build/",
  // filename:devServer?'[name].js':'[name]-[chunkhash].js'
  filename:'[name].js'
};

/**
* 编译组件
* */
var loaders=[
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
        test: /\.(png|jpe?g|gif|svg|eot|woff|ttf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
            limit: 50000
        }
    },
    {
        test:/\.css$/,
        loader:'style-loader!css-loader?modules'
    }
];

var plugins=[
    new HtmlWebpackPlugin({
        template:'./index.html'
    }),

   // js、css都会压缩
    new webpack.optimize.UglifyJsPlugin({
        mangle: {
            except: ['$super', '$', 'exports', 'require', 'module', '_']
        },
        compress: {
            warnings: false
        },
        output: {
            comments: false,
        }
    }),

    /*
      * Using this config the vendor chunk should not be changing its hash unless you change its code or dependencies
      * （避免在文件不改变的情况下hash值不变化）
      * */
    new webpack.optimize.OccurrenceOrderPlugin()
];

if(devServer){
    /*
    * 热更新
    * */
    plugins.push(new webpack.HotModuleReplacementPlugin());
}else{
    /*
    * clean publishing directory
    * （发布前清空发布目录）
    * */
    plugins.push(new CleanWebpackPlugin(['build'], {
        root: '', // An absolute path for the root  of webpack.config.js
        verbose: true,// Write logs to console.
        exclude:["indexSlideType.js","shopInfo.js","shopList.js"],
        dry: false // Do not delete anything, good for testing.
    }))
}

var config={
    entry:entry,
    output:output,
    module: {
        loaders: loaders
    },
    plugins: plugins
};

module.exports = config;