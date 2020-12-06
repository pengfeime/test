<template>
    <div id="aside">
        <div class="title" ref="class_btn" @click="toggleGroup">
            <span class="iconfont">&#xe76c;</span>
            <span>分类</span>
        </div>
            <ul class="cover_group" ref="group_ul">
                <li><router-link to="/conquer">气吞山河</router-link></li>
                <li><router-link to="/fairyland">梦幻乐园</router-link></li>
                <li><router-link to="/kingdom">童话王国</router-link></li>
                <li><router-link to="/mountain">锦绣山河</router-link></li>
                <li><router-link to="/spring">春意盎然</router-link></li>
                <li><router-link to="/willow">柳暗花明</router-link></li>
            </ul>

    </div>
</template>

<script>
    export default {
        name: "side",
        data(){
            return{
                isToggle:true, // 默认展开
                group_H:0
            }
        },
        mounted(){
            this.group_H = this.$refs.group_ul.getBoundingClientRect().height
        },
        methods:{
          toggleGroup(){
              this.isToggle?this.$refs.group_ul.style.height = 0:this.$refs.group_ul.style.height = this.group_H+'px'
              this.isToggle = !this.isToggle
          }
        }
    }
</script>

<style lang="less" scoped>
    #aside{
        position:fixed;
        top:5rem;
        padding-left:.1rem;
        text-align:center;
        font-size:.6rem;
        .title{
            width:4rem;
            height:1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background:linear-gradient(to right,#ccc,#eee);
            cursor:pointer;

            span{
                margin: 0 .1rem;
            }
        }
        .cover_group{
            height:10.4rem;
            transition:all 2s linear;
            overflow: hidden;
            li{
                width:4rem;
                height:1.5rem;
                line-height:1.5rem;
                font-size:.5rem;
                border-bottom: 2px solid #ccc;
                a{
                    color:#55a18b;
                }
                &:hover{
                    background: #ccc;
                    a{
                        color:white;
                    }
                }
            }
        }

    }
</style>
