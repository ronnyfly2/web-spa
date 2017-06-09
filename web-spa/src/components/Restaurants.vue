<template lang="pug">
	h1 {{ msg }} : {{ restaurantsApi }}
</template>

<script>
import axios from 'axios'

export default {
	name: 'restaurant',
	mounted () {
		this.getRestaurants()
	},
	data () {
		return {
			msg: 'Vue, say Restaurant list',
			restaurantsApi: null
		}
	},
	methods: {
		getRestaurants(){
			axios.get('http://local.web-api/restaurantes-api.php/restaurantes').then(
				(api) => {
					this.restaurantsApi = api.data
					console.log(api)
				}
			)
		}
	}
}
</script>