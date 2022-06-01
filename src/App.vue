<template>
  <div id="app">

    <PruebaVuex class="mt-5" msg="Prueba Vuex"/>
    
    <nav>
      <router-link to="/">Componente 1</router-link> |
      <router-link to="/dos">Componente 2</router-link>
    </nav>

    <router-view/>

  </div>
</template>

<script>

import PruebaVuex from '@/components/PruebaVuex.vue'

export default {
  name: 'App',
  components: {
    PruebaVuex  
  },
}
</script>

<style>


  
</style>













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
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
