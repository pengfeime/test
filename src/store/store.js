import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isTop:true // 记录页面是否有发生滚动，ture表示未发生滚动
    },
    getters:{
        getScroll(state) { // 获取isTop
            return state.isTop
        }
    },
    mutations:{
        handleTop(state,ontop){ //ontop参数记录了页面是否发生滚动
            return state.isTop = ontop
        }
    },
    actions:{
        // action提交的是mutation，而mutation直接更改状态
        getHandleTop(context,ontop){
            context.commit('handleTop',ontop)
        }
    }
})
