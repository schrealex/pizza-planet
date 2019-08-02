<template>
  <div class="row">
    <div class="col-sm-12 text-center" id="home">
      <div class="background">
        <h1>Welcome to Pizza Planet</h1>
        <h2>Feeling hungry?</h2>
        <button @click="goToMenu" class="btn btn-success">Let's order!</button>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "Home",
		methods: {
			goToMenu() {
				this.$router.push({name: 'menuLink'})
			}
		}
	}
</script>

<style scoped>
  #home {
    background: url('../../src/assets/pizza.jpg');
    height: 800px;
    padding: 10%;
  }

  h1, h2 {
    margin: 6%;
  }

  .background {
    background-color: #eeeeee;
    opacity: 0.8;
    max-width: 60%;
    margin: 0 auto;
    padding: 20px 0;

  }
</style>
