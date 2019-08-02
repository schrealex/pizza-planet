<template>
  <footer class="row">
    <nav class="navbar navbar-expand-lg navbar-light">
      <ul class="navbar-nav">
        <router-link tag="li" :to="{ name: 'homeLink' }"><a class="nav-link">home</a></router-link>
        <router-link tag="li" :to="{ name: 'aboutLink' }"><a class="nav-link">about</a></router-link>
        <router-link tag="li" :to="{ name: 'adminLink' }"><a class="nav-link">admin</a></router-link>
      </ul>
    </nav>
  </footer>
</template>

<script>
	export default {
		name: "Footer"
	}
</script>

<style scoped>

</style>
