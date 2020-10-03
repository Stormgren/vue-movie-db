<template>
  <div id="app">
    <Header :title='title'/>
    <router-view />
  </div>
  
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  data(){
    return {
  title: 'Vue Movie Db',
 
    }
  },
 
  components: {
    Header
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
