<template lang="pug">
	header
		.box_header
			img.logo(src="../assets/img/logo_garita.png")
			nav
				ul
					li
						router-link(to="/")
							i.icon.icon-localidad
							span SUCURSALES
					li
						router-link(to="/hello")
							i.icon.icon-block-3
							span GARITAS DE CONTROL
					li
						router-link(to="/restaurants")
							i.icon.icon-police
							span AGENTES DE SEGURIDAD
					li

						router-link(:to="{name:'Featured', params:{id:16}}")
							i.icon.icon-user-3
							span VISITABLES
					li
						router-link(to="/contact")
							i.icon.icon-note
							span REPORTE DE VISITAS
					li
						router-link(to="/restaurant-add")
							i.icon.icon-user
							span PERFIL
</template>

<script>
export default {
	props:['ListMenu']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import "../stylus/base/base.styl"
header
	height 100px
	width 100%
	background white
.box_header
	max-width 1440px
	margin 0 auto
	text-align left
.logo
	width 11.667%
	max-width 168px
	margin-right 3%
	min-width 160px
.logo
nav
	display inline-block
	vertical-align middle
nav
	width 84%
	text-align right
	ul
		list-style-type none
		padding 0

	li
		display inline-block
		margin 0 2.5138%
		position relative
		&:last-child
			margin-right 0
		.icon
			color #009edb
			font-size 25px
			display block
			text-align center
	a
		color #009edb
		text-align center
		height 100px
		padding-top 26px
		display block
		&.router-link-exact-active
			border-bottom 3px solid #009edb
			&:after
				content ''
				width 0
				height 0
				border-right 8px solid transparent
				border-top 8px solid transparent
				border-left 8px solid transparent
				border-bottom 8px solid #009edb
				position absolute
				bottom 0
				left 50%
				margin-left -8px
</style>