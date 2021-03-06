import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		isDark: false,
		isLogin: false,
		showPayMethodsList: false,
	},
	mutations: {
		login(state) {
			state.isLogin = true
		},
		logout(state) {
			state.isLogin = false
		},
		changeShowPayMethodsList(state) {
			state.showPayMethodsList = !state.showPayMethodsList
		}
	}
})

export default store