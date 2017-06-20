<template lang="pug">
#app.container
	ListMenu
	router-view
</template>

<script>
import ListMenu from './components/ListMenu.vue'
export default {
	components:{
		ListMenu
	},
	name: 'app'
}
</script>

<style lang="stylus">
body
	height 100%
	width 100%
#app
	font-family 'Avenir', Helvetica, Arial, sans-serif
	-webkit-font-smoothing antialiased
	-moz-osx-font-smoothing grayscale
	text-align center
	color #2c3e50
	width 100%
	height 100%
h1, h2
	font-weight normal
.container
	//background white url('./assets/img/fondo.jpg') no-repeat
	//background-size cover
	background #f3f9ff
	width 100%
	height 100%
	box-shadow 2px 3px 0 red
	background linear-gradient(top, beige, bisque)
</style>
