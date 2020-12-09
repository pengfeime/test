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
import reg from '../views/Reg'
import newspage from '../views/Newspage'
import companyabout from '../views/CompanyAbout'
import companynew from '../views/CompanyNew'
import honor from '../views/Honors'
import teamintro from '../views/TeamIntro'
import productabout from '../views/ProductAbout'
import tradenew from '../views/TradeNew'
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
            name:'reg',
            component:reg
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/news',
            component:newspage,
            children:[
                {
                    path:'companyabout',
                    component:companyabout
                },
                {
                    path:'companynew',
                    component: companynew
                },
                {
                    path:'honor',
                    component:honor
                },
                {
                    path:'products',
                    component:productabout
                },
                {
                    path:'teamintro',
                    component:teamintro
                },
                {
                    path:'tradenew',
                    component:tradenew
                }

            ]
        },
    ]
})
export default router
