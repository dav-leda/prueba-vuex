<template>
  <div class="container mt-5">
    
    <button
      class="btn btn-danger mx-4" 
      @click="decrement"
    >-</button>

    <span>{{counter}}</span>

    <button
      class="btn btn-success mx-4" 
      @click="increment"
    >+</button>
  
    <h2 class="mt-3">Doble: {{ doubleCounter }}</h2>

    <button
      class="btn mt-3"
      :class="userBtn"
      @click="login"
    >{{ loggedIn ? 'Logout' : 'Login'}}</button>

    <br>

    <p 
      class="alert mt-4"
      :class="[ loggedIn ? 'alert-primary' : 'alert-danger' ]"
    >Usuario {{ loggedIn ? 'loggeado' : 'no loggeado'}}</p>
  
  </div>

</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ComponenteUno',
  
  computed: {

    userBtn () {
      return this.$store.state.loggedIn ? 
        'btn-secondary' : 
        'btn-dark' ;
    },
    // this.$store.getters.counter
    // this.$store.getters.loggedIn
    // this.$store.getters.doubleCounter
    // Para abreviar:
    ...mapGetters([
      'counter',
      'loggedIn',
      'doubleCounter'
    ]),
  },

  methods: {
    // this.$store.dispatch('increment')
    // this.$store.dispatch('decrement')
    // this.$store.dispatch('login')
    // Para abreviar:
    ...mapActions([
      'increment', 
      'decrement',
      'login',
    ])
  }
}
</script>

<style scoped>

.alert {
  display: inline-block;
}

</style>