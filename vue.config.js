module.exports = {
  // 选项...
  baseUrl: './', //设置baseUrl,在index.html中导入js，其它文件的时候用到
  productionSourceMap: false, // 不生成source Map文件
  lintOnSave: false,//暂时关掉eslint的检查
  configureWebpack:{
    externals: { 
      // 左边的名字是 import xx from '包名'  包名
      // 右边的名字是 xx 建议使用平时使用的名字即可
      vue: 'Vue',
      axios:'axios',
      'vue-router':'VueRouter',
      vuex:'Vuex',
      moment:'moment',
      'vue-lazyload':'VueLazyload',
      'v-distpicker':'VDistpicker'
    }
  }
}
