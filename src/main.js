//ES6 导入模块的方式 相当于原先 require('')
import Vue from 'vue' // const Vue = require('vue')
// import ElementUI from 'element-ui';
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload,{
  loading:require('./statics/site/images/01.gif')
})

// 导入根组件
import App from './App.vue'

// Vue.use(ElementUI);

//按需导入ElementUI
import {
  Button,
  Pagination,
  Input,
  InputNumber,
  Switch,
  Form,
  FormItem,
  Radio,
  RadioGroup,
  MessageBox,
  Message,
  Carousel,
  CarouselItem,
  Row,
  Col
} from 'element-ui'

Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Button) //自动导入element-ui/lib/theme-chalk/button.css
Vue.use(Pagination)
Vue.use(InputNumber)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Input)
Vue.use(Switch)
Vue.use(Row)
Vue.use(Col)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

// 全局导入样式
// import 'element-ui/lib/theme-chalk/index.css';
import "./statics/site/css/style.css"
// import "./statics/site/less/test.less"

Vue.config.productionTip = false

// 导入过滤器，我这样写只是为了让webpack打包的时候，找到它打包
import './filters'

// 导入路由对象 (如果一个文件下有一个文件叫index.js，可以只写到文件夹)
import router from './router' // const router = require('./router')
import store from './store'

// 创建根实例，整个项目中只需要有一个根实例
// 使用render函数，渲染根组件
// 我更改了代码
new Vue({
  // 渲染根组件
  render: h => h(App),
  router,
  store
}).$mount('#app')
