<template>
  <div class="row">
    <div>
    <div>
      <p>Logged in as: {{ currentUser }}</p>
    </div>
    <form>
      <div class="form-group">
        <label>E-mail address</label>
        <input class="form-control" id="email" placeholder="Enter email" type="text">
      </div>
      <div class="form-group">
        <label>Password</label>
        <input class="form-control" id="password" placeholder="Enter password" type="password">
      </div>
      <button @click.prevent="signIn" class="btn btn-primary" type="button">Sign in</button>
      <button @click.prevent="signOut" class="btn btn-danger" type="button">Sign out</button>
    </form>
  </div>
  </div>
</template>

<script>
	import Firebase from 'firebase'
	import { store } from '../store/store'

	Firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			store.dispatch('setUser', user)
		} else {
			store.dispatch('setUser', null)
		}
	})

	export default {
		name: "Login",
		data() {
			return {}
		},
		computed: {
			currentUser() {
				return this.$store.getters.currentUser
			}
		},
		methods: {
			signIn() {
				const email = document.getElementById('email').value;
				const password = document.getElementById('password').value;

				Firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;

					if (errorCode === 'auth/wrong-password') {
						alert('Wrong password');
					} else {
						alert(errorMessage);
					}
				});
			},
			signOut() {
				Firebase.auth().signOut().then(() => {
					alert('Logged out');
				}).catch((error) => {
					alert('error');
				})
			}
		}
	}
</script>

<style scoped>

</style>
