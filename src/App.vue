<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'jobs' }">Jobs</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link>
  </nav>

  <button @click="redireciona">Redireciona</button>
  <button @click="volta">Volta</button>
  <button @click="vai">Vai</button>

  <router-view/>
</template>

<script>
export default {
  methods: {
    redireciona(){
      this.$router.push({ name: "home" });
    },
    volta(){
      this.$router.go(-1);
    },
    vai(){
      this.$router.go(1);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: white;
  background: crimson;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
