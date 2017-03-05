import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
const Home = {template:"<div>我是home</div>"}
const first = {template:"<div>1.我是first</div>"}
const second= {template:"<div>2.我是second</div>"}
const users = {
	template:`
		<div>
			<h2>users</h2>
			
		</div>
	`
}
const user = {
	template:`
		<div>
			{{$route.params.username}}
			{{$route.query.aaa}}
		</div>
	`
}
const router = new VueRouter({
	mode:"history",
	base:__dirname,
	routes:[
		{path:"/",name:"home",component:Home},

		{path:"/users",component:users,
			children:[
				{path:"/",component:users},
				{path:":username",name:"user",component:user},
			]
		}
	]
})
new Vue({
	router,
	template:`
		<div id="r">
			<h2>导航</h2>
			<ol>
				<li><router-link to="/">home</router-link></li>
				<li><router-link to="/first">first</router-link></li>
				<li>
					<router-link :to="{path:'/users/wos',query:{aaa:'bbb'}}">
						wos
					</router-link>
				</li>
				<li><router-link to="second" append>append</router-link></li>
			</ol>
			<router-view></router-view>	
		</div>
		`
}).$mount("#app")