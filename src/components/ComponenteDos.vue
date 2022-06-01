<template>
  <div class="container mt-5">

    <h2 class="mt-5">Contador: {{ counter }}</h2>
  
    <h2 class="mt-2">Doble: {{ doubleCounter }}</h2>

    <p
      class="alert mt-5"
      :class="userAlert"
    >Usuario {{ loggedIn ? 'loggeado' : 'no loggeado'}}</p>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'ComponenteDos',

  mounted () {

    // A diferencia de Redux, Vuex permite cambiar el state
    // en forma directa desde un componente, aunque nunca debería hacerse
    // porque entonces se vuelve imposible mantener un state global.
    // this.$store.state.counter = 100;
  },
  
  computed: {

    userAlert () {
      return this.$store.state.loggedIn ? 
        'alert-primary' : 
        'alert-danger' ;
    },

    ...mapGetters([
      'counter',
      'loggedIn',
      'doubleCounter'
    ]),
  }
}
</script>




<style scoped>

.alert {
  display: inline-block;
}

</style>