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
new Vue({
    el:'#app',
    data(){
        return {
            loading1:true,
            loading2:true,
            message:'hi'
        }
    },
    mounted() {
        console.log(Col)
    },
    methods:{
        inputChange(e){
            console.log(e.target.value)
        }
    }
})
