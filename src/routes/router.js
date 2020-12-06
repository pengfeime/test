import Vue from 'vue'
import VueRouter from 'vue-router'
import mainpart from '../components/Main'
import pageconquer from '../views/Pageconquer'
import pagefairyland from '../views/Pagefairyland'
import pagekingdom from '../views/Pagekingdom'
import pagemountain from '../views/Pagemountain'
import pagespring from '../views/Pagespring'
import pagewillow from '../views/Pagewillow'
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
        }

    ]
})
export default router
