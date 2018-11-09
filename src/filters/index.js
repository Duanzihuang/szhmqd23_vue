import Vue from 'vue'
import moment from 'moment'

// 全局注册过滤器
Vue.filter('dateFmt',(input,formatStr='YYYY-MM-DD')=>{
    return moment(input).format(formatStr)
})