import Vue from 'vue';
import MoviesList from './components/MoviesList.vue';
import MovieDetails from '@/components/MovieDetails.vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Movie List',
            component: MoviesList
        },
        {
            path: '/movie/:id',
            name: 'Movie Details',
            component: MovieDetails
        }
    ]
});