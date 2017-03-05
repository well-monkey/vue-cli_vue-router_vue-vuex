import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

const first = {template:"<div>1.我是first</div>"}
const second= {template:"<div>2.我是second</div>"}
const Home = {template:"<div>我是home</div>"}
const firstone = {template:"<div>我是子路由{{$route.params.id}}</div>"}
const firsttwo = {template:"<div>我ye是子路由</div>"}
const third = {template:"<div>我是third</div>"}
const aaaa = {
	template:`
		<div class="aaaa">
			<h2>组件</h2>
			<router-view></router-view>
		</div>
	`
}

const router = new VueRouter({
	mode:"history",
	base:__dirname,
	routes:[
		{path:"/",name:"home",component:Home},
		{path:"/first",name:"first",component:aaaa,
			children:[
				{path:"/",name:"first",component:first},
				{path:"first",name:"first-firstone",component:firstone},
				{path:"second",name:"first/firsttwo",component:firsttwo},
				{path:"third",name:"third",redirect:"first"},
			]
		},
		{path:"/second",name:"two",components:{
			default:Home,
			left:first,
			right:second
		}},
		{path:"/third",name:"third",component:third,alias:"/hahaha"},
		{path:"/params/:aaa/:bbb"},
		{path:"/param-regex/:id(\\d+)"},
		{path:"/aaa/:id",component:firstone},
		{path:"/bbb/:id",redirect:"/aaa/:id"},
		{
			path:"/ccc/:id",
			redirect:xxxx =>{
				const {hash,params,query} = xxxx;
				if(params.id=="001"){
					return '/'
				}
			}
		},
	]
})
new Vue({
	router,
	template:`
		<div id="r">
			<h2>导航</h2>
			<p>{{$route.name}}</p>
			<ul>
				<li><router-link to="/">我是home</router-link></li>
				
				<li><router-link to="/first">1.我是1</router-link></li>
				<ul>
				 	<li><router-link :to="{name:'first-firstone',params:{id:111111}}">1.我是子路由1</router-link></li>
					<li><router-link to="/first/second">2.我是子路由2</router-link></li>
					<li><router-link to="third">5.third链接到first  第一种路由定向 存在不太明白的地方，相互间跳转</router-link></li>
			 	</ul>
				<li><router-link to="/second">2.1我是2</router-link></li>
				<li><router-link to="/third">2.2我是3</router-link></li>
				<li><router-link to="/params/111/222">3.我是url传值</router-link></li>
				<li><router-link to="/param-regex/12345">4.我是url传值id</router-link></li>
				
				<li><router-link to="/aaa/123">6.1第二种路由定向方法 指向子路由 </router-link></li>
				<li><router-link to="/bbb/345">6.2第二种路由定向方法 指向子路由</router-link></li>
				<li><router-link to="/ccc/001">7第三种路由定向方法 指向HOME</router-link></li>
				<li><router-link to="/hahaha">8alias 别名 指向的是我是third</router-link></li>
			</ul>
			<pre><code>
					{{$route.params.aaa}}
					{{$route.params.bbb}}
					{{$route.params.id}}
					
			</code></pre>
			<router-view></router-view>
			<router-view name="left" style="width:200px;height:200px;background:#ff0;float:left"></router-view>
			<router-view name="right" style="width:200px;height:200px;background:orange;float:left"></router-view>
		</div>
		`
}).$mount("#app")

