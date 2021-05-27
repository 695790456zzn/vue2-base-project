const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  'pluginOptions': { // 第三方插件配置
    'style-resources-loader': {
      'preProcessor': 'less',
      'patterns': [path.resolve(__dirname, './src/assets/css/base.less')] // less所在文件路径
    }
  },
  'chainWebpack': config => {
    config.output.filename('assets/js/[name].[hash].js').chunkFilename('assets/js/[name].[hash].js').end();
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('comp', resolve('src/components'))
      .set('img', resolve('src/assets/images'))
      .set('utils', resolve('src/utils'));
  },
  'configureWebpack': (config) => {
    if (process.env.MODE_ENV === 'production') {// 为生产环境修改配置...
      config.mode = 'production';
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true; // 打包去掉console打印
      config['performance'] = {//打包文件大小配置
        'maxEntrypointSize': 10000000,
        'maxAssetSize': 30000000
      };
    }
  }
};