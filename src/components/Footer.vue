<template>
    <div id="footer">
        <div>
            <div class="with_icon">
                <div>
                    <span class="iconfont">&#xe605;</span>
                    <p>O2O双平台</p>
                    <p class="intro">墙布十大品牌</p>
                </div>
                <div>
                    <span class="iconfont">&#xe614;</span>
                    <p>new bee</p>
                    <p class="intro">高品质</p>
                </div>
                <div>
                    <span class="iconfont">&#xe672;</span>
                    <p>双重质检</p>
                    <p class="intro">正品保证</p>
                </div>
                <div>
                    <span class="iconfont">&#xe6e8;</span>
                    <p>购de放心</p>
                    <p class="intro">万千家庭选择</p>
                </div>
            </div>
            <div class="about">
                <router-link to="/">相关政策</router-link>
                <router-link to="/">隐私保护</router-link>
                <router-link to="/">联系我们</router-link>
                <router-link to="/">推荐方案</router-link>
                <router-link to="/">配送方式</router-link>
                <router-link to="/">公司简介</router-link>
            </div>
            <p class="register">浙ICP备17010965号-3</p>
            <p>© 2005-2019 领绣墙布 (浙江联翔智能家居股份有限公司)  版权所有，并保留所有权利</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "foot"
    }
</script>

<style lang="less" scoped>
    #footer{
        position:fixed;
        width:100%;
        bottom:0rem;
        background:#352d27;
        font-size:.5rem;
        @media (max-width:750px){
            background: transparent;
        }
        &>div{
            @media (max-width:750px){
                transform:scaleY(.8);
                background:#352d27;
            }
            .with_icon{
                display:flex;
                align-items: center;
                justify-content:space-around;
                margin:.2rem 2rem;
                color:white;
                @media (max-width:750px){
                    margin:0;
                }
                &>div{
                    span{
                    }
                    p{
                        transform:scale(0.8); // 解决浏览器默认最小字体12px
                    }
                    .intro{
                        margin-top:.2rem;
                    }
                }
            }
            .about{
                margin:.2rem 1rem;
                display:flex;
                align-items:center;
                justify-content: space-around;
                @media (min-width:750px){
                    width:60%;
                    margin:auto;
                }
                a{
                    color:white;
                    cursor:pointer;
                    transform:scale(.7);
                    &:hover{
                        color:#dfb95f;
                    }
                }
            }
            .register,.register+p{
                margin-top:.2rem;
                text-align:center;
                transform:scale(.8);
                color:white;
                font-weight: bold;
                white-space:nowrap;
                overflow:hidden;
                text-overflow: ellipsis;
            }
        }
    }
</style>
