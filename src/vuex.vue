<template>
	<div id="app">
		<h1>hello vuex</h1>
		<p>{{$store.state.aaaa.count}}--{{count}}</p>
		<p><button @click="$store.commit('jia',{a:4})">++++++</button></p>
		<p><button  @click="$store.commit('jian',4)">-4的方法</button></p>
		
		<p><button @click="jiaplus">++++++plus</button></p>
		<p><button  @click="jianplus">-plus的方法</button></p>
	</div>
</template>


<script>
	import {mapState,mapMutations,mapGetters,mapActions} from "vuex"
	export default{
		name:"app",
		// data(){
		// 	return{
		// 		count:1//可以是随意的数字 然后关联dom
		// 	}
		// },
		computed:{
			// ...mapState([
			// 	"count"
			// ]),
			count(){
				return this.$store.state.aaaa.count
			}
		// 	// ...mapGetters([
		// 	// 	"countAnt"
		// 	// ])
		},
		methods:{
			...mapMutations([
				"jia",
				"jian"
			]),
			...mapActions([
				"jiaplus"
			]),
			...mapActions([
				"jianplus"
			])
		},
		beforCreate:function(){
			console.log("1.初始化后")
		},
		created:function(){
			console.log("2.创建完成")
		},	
		beforeMount:function(){
			console.log("3.挂载之前")
		},
		mounted:function(){
			console.log("4.挂载后显示dom")
		},
		beforeUpdated:function(){
			console.log("5.被更新前")
		},
		updated:function(){
			console.log("6.更新后")
		},
		activated:function(){
			console.log("7.动态载入标签")
		},
		deactivated:function(){
			console.log("8.动态载入标签后")
		},
		beforeDestroy:function(){
			console.log("9.销毁前")
		},
		Destroyed:function(){
			console.log("10.销毁后")
		}
	}
</script>