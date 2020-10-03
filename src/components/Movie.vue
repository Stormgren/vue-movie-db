<template>
 <router-link :to='moviePath'>
  <img :src="posterImage" :alt="movie.title" />
</router-link>

</template>

<script>
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
export default {
    name: 'Movie',
    props: ['movie'],
    computed: {
      posterImage: function() {
        return `${POSTER_PATH}/${this.movie.poster_path}`
      },
      moviePath: function(){
        return `/movie/${this.movie.id}`
      }
    }
}
</script>

<style scooped>
img {
  box-shadow: 0 0 35px black;
  
}

</style>