import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
new Vue({
    el:'#app',
    data(){
        return {
            loading1:true,
            loading2:true
        }
    }
})
import chai from 'chai'
const expect=chai.expect
//单元测试
{
    const Constructor=Vue.extend(Button)
    const button=new Constructor({
        propsData:{
            icon:'setting'
        }
    })
    //可以不mount到页面上，到内存中就可以了
    button.$mount()
    let useElement=button.$el.querySelector('use')
    let href=useElement.getAttribute('xlink:href')
    //期待href为#i-setting
    expect(href).to.eq('#i-setting')
    button.$el.remove()
    button.$destroy()
}
{
    const Constructor=Vue.extend(Button)
    const button=new Constructor({
        propsData:{
            icon:'setting',
            loading:true
        }
    })
    button.$mount()
    let useElement=button.$el.querySelector('use')
    let href=useElement.getAttribute('xlink:href')
    //期待href为#i-setting
    expect(href).to.eq('#i-loading')
    button.$el.remove()
    button.$destroy()
}
{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const Constructor=Vue.extend(Button)
    const button=new Constructor({
        propsData:{
            icon:'setting',
            iconPosition:'right'
        }
    })
    button.$mount(div)
    let svg=button.$el.querySelector('svg')
    let {order}=window.getComputedStyle(svg)
    //期待href为#i-setting
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()
}
{
    //mock
    const Constructor=Vue.extend(Button)
    const gButton=new Constructor({
        propsData:{
            icon:'setting'
        }
    })
    gButton.$mount()
    gButton.$on('click',()=>{
        expect(1).to.eq(1)
    })
    let button=gButton.$el
    button.click()
}
