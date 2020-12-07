import Vue from 'vue'
import VueRouter from 'vue-router'
import mainpart from '../components/Main'
import pageconquer from '../views/Pageconquer'
import pagefairyland from '../views/Pagefairyland'
import pagekingdom from '../views/Pagekingdom'
import pagemountain from '../views/Pagemountain'
import pagespring from '../views/Pagespring'
import pagewillow from '../views/Pagewillow'
import login from '../views/Login'
import register from '../views/Reg'
Vue.use(VueRouter)
let router = new VueRouter({
    routes:[
        {
            path:'/',
            component:mainpart
        },
        {
            path:'/conquer',
            component: pageconquer
        },
        {
            path:'/fairyland',
            component:pagefairyland
        },
        {
            path:'/kingdom',
            component:pagekingdom
        },
        {
            path:'/mountain',
            component:pagemountain
        },
        {
            path:'/spring',
            component:pagespring
        },
        {
            path:'/willow',
            component:pagewillow
        },
        {
            path:'/reg',
            component:register
        },
        {
            path:'/login',
            component:login
        }

    ]
})
export default router
