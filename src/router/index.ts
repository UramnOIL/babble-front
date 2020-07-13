import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

Vue.use(VueRouter)

import "@/pages/Management.vue"
import MainContent from "@/components/organisms/MainContent.vue";


const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Management',
		component: MainContent
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
