<template>
  <v-app id="app">
    <v-container>
      <Home title='Listagem de comentários do jsonplaceholder' />
    </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Home from './views/Home.vue'

export default defineComponent({
  name: 'App',
  components: {
    Home,
  },
})
</script>

<style lang="scss">
body,
.container {
  background-color: #f8f4ea;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: #f8f4ea;
  margin-top: 60px;
}
</style>
