// 基本构建
const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

// debug代理Api
// const proxyApi = 'http://47.96.227.9:8080' // 生产环境-api
const proxyApi = 'http://47.99.136.61:8080' // 测试环境-api
// const proxyApi = 'http://47.99.136.61:8081' // 开发环境-api

// 插件
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css'] // 定义压缩文件类型

module.exports = {
  baseUrl: '', // 根域上下文目录
  outputDir: 'dist', // 构建输出目录
  assetsDir: 'static', // 静态资源目录 (js, css, img, fonts)
  lintOnSave: true, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  runtimeCompiler: true, // 运行时版本是否需要编译
  transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  configureWebpack: config => {
    // webpack配置，值位对象时会合并配置，为方法时会改写配置
    if (debug) {
      // 开发环境配置
      config.devtool = 'cheap-module-eval-source-map'
    } else {
      // 生产环境配置
      // 启用gzip打包
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      )
    }
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          assets: path.resolve(__dirname, './src/assets'),
          vue$: 'vue/dist/vue.esm.js'
        }
      }
    })
  },
  css: {
    // 配置高于chainWebpack中关于css loader的配置
    modules: false, // 是否开启支持‘foo.module.css’样式
    extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
    sourceMap: false, // 是否在构建样式地图，false将提高构建速度
    loaderOptions: {
      // 预设器配置项
      css: {
        localIdentName: '[name]-[hash]',
        camelCase: 'only'
      }
    }
  },
  parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
  pluginOptions: {
    // 第三方插件配置
  },
  pwa: {
    // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  },
  devServer: {
    open: debug,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: proxyApi,
        ws: true,
        changOrigin: true
      }
    },
    before: app => {}
  }
}
