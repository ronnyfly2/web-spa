<template lang="pug">
	h1 {{ msg }}
</template>

<script>
export default {
	name: 'restaurant',
	mounted (){
		this.id_featured = this.$route.params.id;
	},
	data () {
		return {
			msg: 'Vue, say Restaurant list',
			id_featured : null
		}
	}
}
</script>