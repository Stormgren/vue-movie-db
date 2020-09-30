<template>
    <h1>{{ movie.title }}</h1>
</template>

<script>
    export default {
        name: 'MoviesList',
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
                let res = await fetch('https://api.themoviedb.org/3/movie/550?api_key=e2ab139be3e5d83d5ebb4792327c1e07')
                let movie = await res.json();
                this.movie = movie;
 
                } catch(e) {
                    console.log(e)
                }
            }
        }
    }
</script>

<style>
</style>