<template>
    <div id="news">
        <aside>
            <ul>
               <li v-for="(item,index) in classify" :key="index">
                   <router-link :to="item.path" >{{item.title}}</router-link>
               </li>
            </ul>
        </aside>
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
    export default {
        name: "newspage",
        data(){
            return {
                classify:[
                    {
                        title:'企业新闻',
                        path:'/news/companynew'
                    },
                    {
                        title:'公司简介',
                        path:'/news/companyabout'
                    },
                    {
                        title:'企业荣誉',
                        path:'/news/honor'
                    },
                    {
                        title:'产品简介',
                        path:'/news/products'
                    },
                    {
                        title:'团队简介',
                        path:'/news/teamintro'
                    },
                    {
                        title:'行业新闻',
                        path:'/news/tradenew'
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    #news{
        display: flex;
        height: 100%;
        padding: .3rem;
        font-size:.7rem;
        aside{
            width:20%;
            padding: 2rem .1rem;
            background: #55a18b;
            ul{
                li{
                    margin: .2rem 0;
                    @media (max-width:750px){
                        transform: scale(.8);
                    }
                }
            }
        }
        section{
            flex: 1;
            background:lightgray;
        }
    }
</style>
