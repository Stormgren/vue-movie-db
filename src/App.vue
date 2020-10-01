<template>
  <div id="app" v-if="status === 'Ready'">
    <Header :title='title'/>
    <MoviesList />

  </div>
  <div v-else-if="status === 'Loading'">
    <h1>Loading</h1>
  </div>
  <div v-else>
    <h1>Error</h1>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MoviesList from './components/MoviesList.vue'

export default {
  name: 'App',
  data(){
    return {
  title: 'Vue Movie Db',
  loaded: true,
  status: 'Ready'
    }
  },
 
  components: {
    Header,
    MoviesList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
