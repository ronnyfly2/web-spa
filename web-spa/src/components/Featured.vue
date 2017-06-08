<template lang="pug">
	h1 {{ msg }} 
		span {{ id_featured }}
</template>

<script>
export default {
	name: 'featured',
	mounted (){
		this.id_featured = this.$route.params.id;
	},
	data () {
		return {
			msg: 'Vue, say featured',
			id_featured : null
		}
	}
}
</script>
