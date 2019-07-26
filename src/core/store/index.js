import Vue from "vue"
import Vuex from "vuex";
import apis from "@/core/api/index";
import { Indicator } from 'mint-ui';
Vue.use(Vuex)

// 组件内部的data,作用:全局状态管理和通信
const state = { //单项数据流,定义属性
}
// 定义同步方法 methods   调用 this.$store.commit("mutations里的方法",val)
const mutations = { //同步方法
    add(state) {
    }
}

// 定义 compunted
const getters = {  //用于属性计算
    count(state) {
        return
    }
}

// 定义异步方法,通用接口调用 this.$store.dispatch("actions里的方法",val)
// context可以调用mutations方法和actions自己的方法,还可以使用getters和state
const actions = {
    test(context, data) { }

}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
