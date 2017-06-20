<template lang="pug">
.hello
	h1 {{ msg }}
	.icon.icon-arrow-bottom
</template>

<script>
export default {
	name: 'hello',
	data () {
		return {
			msg: 'Vue, say Hello'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
	.icon
		font-size 35px
		color green
</style>
