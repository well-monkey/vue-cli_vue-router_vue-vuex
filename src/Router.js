import Vue from "vue"
import VueRouter from "vue-router"
import Parent from "./transition.vue"
Vue.use(VueRouter)

const Home = {template:"<div>我是home</div>"}
const aaaa = {
	template:`
		<div class="aaaa">
			<h2>aaaa</h2>	
		</div>
	`
}
// const Parent = {template:"<div>我是我是我是我是Parent</div>"}
const page404 = {
	template:`
		<div>
			<h2>error</h2>
		</div>
	`,
	beforeRouteEnter:(to,from,next)=>{
			console.log(to);
			console.log(from);
			next()
	},
	beforeRouteLeave:(to,from,next)=>{
			// console.log(to);
			// console.log(from);		
			next()	
	},
}

const router = new VueRouter({
	mode:"history",
	base:__dirname,
	routes:[
		{path:"/",component:Home},
		{path:"/aaaa",component:aaaa},
		{path:"/ccc",component:Parent,
			beforeEnter:(to,from,next)=>{
				// console.log(to);
				// console.log(from);
				next()
			}
		},
		{path:"*",component:page404}	
	]
})

new Vue({
	router,
	template:`
		<div id="app">
			<button @click="houtui">后退</button>
			<button @click="qianjin">前进</button>
			<button @click="home">home</button>
			<button @click="query">query</button>
			<h2>导航</h2>
			<ul>
				<li><router-link to="/">home</router-link></li>
				<li><router-link to="/aaaa">aaaa</router-link></li>
				
				<li><router-link to="/ccc">transition页面</router-link></li>
				<li><router-link to="/bbbb">404</router-link></li>
			</ul>
			<transition name="fade" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
		`,
		methods:{
			houtui:function(){
				router.go(-1)
			},
			qianjin:function(){
				router.go(1)
			},
			home:function(){
				router.push("/")
			},
			query:function(){
				router.push({path:"",query:{a:1,b:2}})
			}
		}
}).$mount("#app")

