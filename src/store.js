import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const state = {
	count:44
}
const mutations = {
	jia(state,n){
		state.count+=n.a
	},	
	jian(state,n){
		state.count-=n
	}
}
const getters = {
	countAnt:function(state){
		return state.count+=100
	}
}
const actions = {
	jiaplus(context){
		context.commit('jia',{a:2})
		setTimeout(()=>{
			context.commit('jian',2)
		},3000)
		console.log("先被执行")
	},
	jianplus(context){
		context.commit('jian',2)
	},
}
const moduleA = {
	state,
	mutations,
	actions
}
export default new Vuex.Store({
	modules:{
		aaaa:moduleA
	}
})