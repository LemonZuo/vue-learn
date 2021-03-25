// vuex 核心管理模块
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 0
}

const mutations = {
    // 增加
    INCREASE(state) {
        state.count++;
    },
    // 减少
    DECREASE(state) {
        state.count--;
    }
}

const actions = {
    increase({commit}) {
        // 提交mutations
        commit('INCREASE');
    },
    decrease({commit}) {
        // 提交mutations
        commit('DECREASE');
    }
}

const getters = {
    evenOrOdd(state) {
        return state.count % 2 == 0 ? '偶数' : '奇数';
    }
}

export default new Vuex.Store({
    // 状态对象
    state,
    // 包含多个更新state函数的对象
    mutations,
    // 对应事件回调函数
    actions,
    // 包含多个getter计算属性对象
    getters
});
