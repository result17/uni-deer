import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		isDark: false,
		isLogin: false,
	},
	mutations: {
		login(state) {
			state.isLogin = true
		}
	}
})

export default store