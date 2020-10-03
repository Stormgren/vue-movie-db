<template>
<transition name="fade">
    <div class="movie-wrapper" :style="styles">
      <div class="movie-info">
        <h1>{{movie.title}}</h1>
        <h3>{{movie.release_date}}</h3>
        <p>{{movie.overview}}</p>
      </div>
    </div>
    </transition>
</template>

<script>
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'

   export default {

        name: 'MovieDetails',
        data(){
            return {
                movie: {}
            }
        },
        created: function () {
            this.fetchData()
        },
        methods: {
            fetchData: async function() {
                try{
                let res = await fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=e2ab139be3e5d83d5ebb4792327c1e07`)
                let movie = await res.json();
                this.movie = movie;
 
                } catch(e) {
                    console.log(e)
                }
            }
        },
        computed: {
            styles() {
                return {
                background: `url(${BACKDROP_PATH}/${this.movie.backdrop_path}) no-repeat`
                }
            }
        }
    }
</script>

<style scoped>
.movie-wrapper {
    position: relative;
    padding-top: 50vh;
    background-size: cover; 
}
.movie-info {
    background: white;
    color: #222;
    padding: 2rem 10%;
}

  .fade-enter-active,
    .fade-leave-active {
        transition: all 0.3s ease;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
        transform: translateX(100%);
    }
</style>