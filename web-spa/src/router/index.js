import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Hello from '@/components/Hello'
import Restaurants from '@/components/Restaurants'
import RestaurantAdd from '@/components/RestaurantAdd'
import Featured from '@/components/Featured'
import Contact from '@/components/Contact'

Vue.use(Router)
console.log(Featured)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/hello',
			name: 'Hello',
			component: Hello
		},
		{
			path: '/restaurant-add',
			name: 'RestaurantAdd',
			component: RestaurantAdd
		},
		{
			path: '/restaurants',
			name: 'Restaurants',
			component: Restaurants
		},
		{
			path: '/featured/:id',
			name: 'Featured',
			component: Featured
		},
		{
			path: '/contact',
			name: 'Contact',
			component: Contact
		}
	]
})
