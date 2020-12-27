import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Footer from './footer'
import content from './content'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Toast from "./toast";
import plugin from './plugin'
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-footer',Footer)
Vue.component('g-content',content)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-sider',Sider)
Vue.component('g-toast',Toast)
Vue.use(plugin)
new Vue({
    el:'#app',
    data(){
        return {
            loading1:true,
            loading2:true,
            message:'hi'
        }
    },
    methods:{
        inputChange(e){
            console.log(e.target.value)
        },
        showToast(){
            this.$toast('我是<strong>撒大声地我乔斯达所出现杂操作打啥撒撒大所大所大大所大所大所多撒写成程序正常展现出限制性处在撤销粗文字</strong>',{
                enableHtml: false
            })
        }
    }
})
