'use strict'
const path = require('path') // 引入Node.js的Path模块
const utils = require('./utils') // 引入utils文件,此处主要用到了assetsPath()方法,用来根据开发模式或生产模式来使用config文件下的相应配置
const config = require('../config') // 引入config文件夹下index.js,使用打包或开发配置
const vueLoaderConfig = require('./vue-loader.conf') // 引入vue文件加载规则

function resolve (dir) { // 用于生成dir变量的绝对路径
  return path.join(__dirname, '..', dir) // Path模块join方法,用于连接路径,正确使用当前系统路径分隔符,Unix系统是"/",Window系统是"\"
}



module.exports = {
  context: path.resolve(__dirname, '../'), // 返回到项目为止的基础目录,绝对路径
  entry: { // 入口文件,可以为多个,单页面应用(SPA):一个入口起点,多页面应用(MPA):多个入口起点
    app: './src/main.js'// 可以全局引入样式框架iview或elementUI,工具库,插件等
  },
  // 配置打包输出路径和命名规则
  output: {
    // 此处最终指向了path.resolve(__dirname, '../dist'),
    // 也就是打包之后,会生成一个dist夹,所有的资源文件都在dist里面
    path: config.build.assetsRoot,
    // 打包后出的文件名，name就是入口文件前面的key值，
    // 此处是index和admin.为什么用name，因为会打包出来三个文件，
    // 第一个是源代码文件，第二个是runtime文件，第三个是ventor文件，
    // 所以每个文件打包出来的名字就跟定义的chunkname一致。
    filename: '[name].js',
    //上线地址,也就是真正的文件引用路径
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    //省略的文件后缀名,require模块可以省略不写后缀名
    extensions: ['.js', '.vue', '.json'],
    alias: { //模块别名配置,用符号或变量名,替换较长的路径
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'), // @符号代表src开始的绝对路径
      'static': resolve('static') // static代表static开始的绝对路径
    }
  },
  // 关于模块配置
  module: {
    //  模块规则（配置 loader、解析器等选项）
    rules: [
      { // 对vue文件使用vue-loader解析器
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig // 配置选项在同级目录vue-loader.conf.js文件里
      },
      { // 对js文件使用babel-loader编译转码,解析es6代码
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]// 限定解析范围
      },
      { // 对图片文件使用url-loader,10000字节之内的图片,会进行base64转换
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]') //资源发布路径
        }
      },
      { // 对多媒体文件使用url-loader,10000字节之内时,进行base64转换
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]') //资源发布路径
        }
      },
      { // 对字体图标文件使用url-loader,小于10000字节时,进行base64转换
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]') //资源发布路径
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
