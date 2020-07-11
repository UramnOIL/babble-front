import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

Vue.use(VueRouter)

import "@/pages/Main.vue"
import Main from "@/components/organisms/MainContent.vue";

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Main',
		component: Main
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
