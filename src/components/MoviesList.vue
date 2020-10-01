<template>
    <ul>
        <li v-for="movie in movies.results" :key="movie.id"><Movie v-bind:movie="movie"/></li>
    </ul>
</template>

<script>
        import Movie from './Movie.vue'
    
    export default {

        name: 'MoviesList',
        data(){
            return {
                movies: []
            }
        },
        components: {
            Movie
        },
        created: function () {
            this.fetchData()
        },
        methods: {
            fetchData: async function() {
                try{
                let res = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e2ab139be3e5d83d5ebb4792327c1e07')
                let movies = await res.json();
                this.movies = movies;
 
                } catch(e) {
                    console.log(e)
                }
            }
        }
    }
</script>

<style scooped>
ul {
    display: grid;
    list-style: none;
    padding: 1rem;
    margin: 0;
    grid-row-gap: 1rem;
    grid-template-columns: repeat(6, 1fr);
}
</style>