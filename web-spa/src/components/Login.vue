<template lang="pug">
	.login
		.box_login
			img(src="../assets/img/fondo.jpg")
			h3 Bienvenido
			form
				fieldset
					label.mail
					input(type="text" placeholder="Correo")
				fieldset
					label.pass
					input(type="text" placeholder="Contraseña")
				fieldset
					button(type="submit") Ingresar
				a.forgot_link(href="javascript:;") ¿Olvidaste tu contraseña?
				span ¿Eres nuevo?
				a.new_user_link(href="javascript:;") Registrate
</template>

<script>
export default {
	name: 'login',
	data () {
		return {
			msg: 'Vue, say login'
		}
	}
}
</script>

<style lang="stylus">

</style>