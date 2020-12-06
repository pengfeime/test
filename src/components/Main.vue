<template>
    <div id="mainpart" ref="mainpart" @scroll="handleScroll">
        <Tooltip content="点击任意地方退出大图" placement="top">
            <div class="cover_out" v-show="isCover" @click="outBrowse">
                <div class="cover_in">
                    <img src="../assets/imgs/11.jpg" alt="">
                </div>
            </div>
        </Tooltip>

        <div class="cover">
            <img src="../assets/imgs/11.jpg" alt="">
            <img src="../assets/imgs/leadshow.png" alt="">
        </div>
        <ul>
            <li>
                <div class="part_one">
                    <router-link to="/">
                        <Tooltip content="点击查看大图" placement="top">
                            <img src="../assets/imgs/1.png" alt="" @click="toBrowse">
                        </Tooltip>

                        <p>绝代风华</p>
                        <span>￥28/m</span>
                        <span>加入购物车</span>
                    </router-link>
                </div>
            </li>
            <li>
                <div class="part_one">
                    <router-link to="/">
                        <Tooltip content="点击查看大图" placement="top">
                            <img src="../assets/imgs/2.jpeg" alt="" @click="toBrowse">
                        </Tooltip>
                        <p>绝代风华</p>
                        <span>￥28/m</span>
                        <span>加入购物车</span>
                    </router-link>
                </div>
            </li>
            <li>
                <div class="part_one">
                    <router-link to="/">
                        <Tooltip content="点击查看大图" placement="top">
                            <img src="../assets/imgs/2.jpeg" alt="" @click="toBrowse">
                        </Tooltip>
                        <p>绝代风华</p>
                        <span>￥28/m</span>
                        <span>加入购物车</span>
                    </router-link>
                </div>
            </li>
            <li>
                <div class="part_one">
                    <router-link to="/">
                        <Tooltip content="点击查看大图" placement="top">
                            <img src="../assets/imgs/2.jpeg" alt="" @click="toBrowse">
                        </Tooltip>
                        <p>绝代风华</p>
                        <span>￥28/m</span>
                        <span>加入购物车</span>
                    </router-link>
                </div>
            </li>
            <li>
                <div class="part_one">
                    <router-link to="/">
                        <Tooltip content="点击查看大图" placement="top">
                            <img src="../assets/imgs/2.jpeg" alt="" @click="toBrowse">
                        </Tooltip>
                        <p>绝代风华</p>
                        <span>￥28/m</span>
                        <span>加入购物车</span>
                    </router-link>
                </div>
            </li>
            <li>
                <div class="part_one">
                    <router-link to="/">
                        <Tooltip content="点击查看大图" placement="top">
                            <img src="../assets/imgs/2.jpeg" alt="" @click="toBrowse">
                        </Tooltip>
                        <p>绝代风华</p>
                        <span>￥28/m</span>
                        <span>加入购物车</span>
                    </router-link>
                </div>
            </li>
            <li>
                <div class="part_one">
                    <router-link to="/">
                        <Tooltip content="点击查看大图" placement="top">
                            <img src="../assets/imgs/2.jpeg" alt="" @click="toBrowse">
                        </Tooltip>
                        <p>绝代风华</p>
                        <span>￥28/m</span>
                        <span>加入购物车</span>
                    </router-link>
                </div>
            </li>
            <li>
                <div class="part_one">
                    <router-link to="/">
                        <Tooltip content="点击查看大图" placement="top">
                            <img src="../assets/imgs/2.jpeg" alt="" @click="toBrowse">
                        </Tooltip>
                        <p>绝代风华</p>
                        <span>￥28/m</span>
                        <span>加入购物车</span>
                    </router-link>
                </div>
            </li>
            <li>
                <div class="part_one">
                    <router-link to="/">
                        <Tooltip content="点击查看大图" placement="top">
                            <img src="../assets/imgs/2.jpeg" alt="" @click="toBrowse">
                        </Tooltip>
                        <p>绝代风华</p>
                        <span>￥28/m</span>
                        <span>加入购物车</span>
                    </router-link>
                </div>
            </li>
            <li>
                <div class="part_one">
                    <router-link to="/">
                        <Tooltip content="点击查看大图" placement="top">
                            <img src="../assets/imgs/2.jpeg" alt="" @click="toBrowse">
                        </Tooltip>
                        <p>绝代风华</p>
                        <span>￥28/m</span>
                        <span>加入购物车</span>
                    </router-link>
                </div>
            </li>
            <li>
                <div class="part_one">
                    <router-link to="/">
                        <Tooltip content="点击查看大图" placement="top">
                            <img src="../assets/imgs/2.jpeg" alt="" @click="toBrowse">
                        </Tooltip>
                        <p>绝代风华</p>
                        <span>￥28/m</span>
                        <span>加入购物车</span>
                    </router-link>
                </div>
            </li>
            <li>
                <div class="part_one">
                    <router-link to="/">
                        <Tooltip content="点击查看大图" placement="top">
                            <img src="../assets/imgs/2.jpeg" alt="" @click="toBrowse">
                        </Tooltip>
                        <p>绝代风华</p>
                        <span>￥28/m</span>
                        <span>加入购物车</span>
                    </router-link>
                </div>
            </li>
            <li>
                <div class="part_one">
                    <router-link to="/">
                        <Tooltip content="点击查看大图" placement="top">
                            <img src="../assets/imgs/2.jpeg" alt="" @click="toBrowse">
                        </Tooltip>
                        <p>绝代风华</p>
                        <span>￥28/m</span>
                        <span>加入购物车</span>
                    </router-link>
                </div>
            </li>
            <li>
                <div class="part_one">
                    <router-link to="/">
                        <Tooltip content="点击查看大图" placement="top">
                            <img src="../assets/imgs/2.jpeg" alt="" @click="toBrowse">
                        </Tooltip>
                        <p>绝代风华</p>
                        <span>￥28/m</span>
                        <span>加入购物车</span>
                    </router-link>
                </div>
            </li>
            <li>
                <div class="part_one">
                    <router-link to="/">
                        <Tooltip content="点击查看大图" placement="top">
                            <img src="../assets/imgs/2.jpeg" alt="" @click="toBrowse">
                        </Tooltip>
                        <p>绝代风华</p>
                        <span>￥28/m</span>
                        <span>加入购物车</span>
                    </router-link>
                </div>
            </li>
            <li>
                <div class="part_one">
                    <router-link to="/">
                        <Tooltip content="点击查看大图" placement="top">
                            <img src="../assets/imgs/2.jpeg" alt="" @click="toBrowse">
                        </Tooltip>
                        <p>绝代风华</p>
                        <span>￥28/m</span>
                        <span>加入购物车</span>
                    </router-link>
                </div>
            </li>
            <li>
                <div class="part_one">
                    <router-link to="/">
                        <Tooltip content="点击查看大图" placement="top">
                            <img src="../assets/imgs/2.jpeg" alt="" @click="toBrowse">
                        </Tooltip>
                        <p>绝代风华</p>
                        <span>￥28/m</span>
                        <span>加入购物车</span>
                    </router-link>
                </div>
            </li>
            <li>
                <div class="part_one">
                    <router-link to="/">
                        <Tooltip content="点击查看大图" placement="top">
                            <img src="../assets/imgs/2.jpeg" alt="" @click="toBrowse">
                        </Tooltip>
                        <p>绝代风华</p>
                        <span>￥28/m</span>
                        <span>加入购物车</span>
                    </router-link>
                </div>
            </li>
            <li>
                <div class="part_one">
                    <router-link to="/">
                        <Tooltip content="点击查看大图" placement="top">
                            <img src="../assets/imgs/2.jpeg" alt="" @click="toBrowse">
                        </Tooltip>
                        <p>绝代风华</p>
                        <span>￥28/m</span>
                        <span>加入购物车</span>
                    </router-link>
                </div>
            </li>
            <li>
                <div class="part_one">
                    <router-link to="/">
                        <Tooltip content="点击查看大图" placement="top">
                            <img src="../assets/imgs/2.jpeg" alt="" @click="toBrowse">
                        </Tooltip>
                        <p>绝代风华</p>
                        <span>￥28/m</span>
                        <span>加入购物车</span>
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "mainpart",
        data(){
            return{
                isCover:false // 控制遮罩层
            }
        },
        methods:{
            handleScroll(){
                // 使用mutation直接更改状态
                //this.$refs.mainpart.scrollTop>0?this.$store.commit('handleTop',false):this.$store.commit('handleTop',true)
                // action提交mutation
                this.$refs.mainpart.scrollTop>0?this.$store.dispatch('getHandleTop',false):this.$store.dispatch('getHandleTop',true)
            },
            outBrowse(){
                // 退出大图模式
                this.isCover = false
            },
            toBrowse(){
                // 进入大图模式
                this.isCover = true
            }
        },
        mounted(){
        }
    }
</script>

<style lang="less" scoped>
    #mainpart{
        overflow: scroll;
        .cover_out{
            position:fixed;
            display: flex;
            align-items: center;
            justify-content: center;
            top:0;
            left:0;
            width:100vw;
            height:100vh;
            background: #e8eaed;
            z-index:1000;
            .cover_in{
                width:80%;
                height:60%;
                padding:.5rem;
                img{
                    width:60%;
                    height:100%;
                }
            }
        }
        .cover{
            margin-left: 5.1rem;
            height:5rem;
            display:flex;
            overflow: hidden;
            @media (max-width:750px){
                height:2rem;
            }
            img{
                height: 100%;
                &:nth-child(1){
                    flex:2;
                }
                &:nth-child(2){
                    flex:5;
                    margin-left: .3rem;
                }
            }
        }
        ul{
            display: flex;
            margin-left: 5rem;
            flex-wrap:wrap;
            li{
                .part_one{
                    width:5.5rem;
                    margin:.1rem;
                    padding:.1rem;
                    border:1px solid #ccc;
                    border-radius:4px;
                    box-shadow:0 2px 2px #ccc;
                    &:hover{
                        transform: scale(1.2);
                    }
                    a{
                        img{
                            width:4rem;
                            height:4rem;
                        }
                        p{
                            font-size:.4rem;
                        }
                        span{
                            display: block;
                            font-size:.4rem;
                            height:.8rem;
                            margin:.1rem;
                        }
                    }
                }
            }
        }
    }
</style>
