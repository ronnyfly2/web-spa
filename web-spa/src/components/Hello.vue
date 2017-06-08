<template lang="pug">
	.hello
		h1 {{ msg }}
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
<style lang="stylus" scoped>

</style>
