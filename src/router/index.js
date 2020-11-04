import Vue from 'vue'
import Router from 'vue-router'
/* import movieRouter from './movie' */
import Movie from '@views/Movie/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    /* movieRouter, */
    {
      path : '/movie',
      name : 'movie',
      component : Movie
      /* component : () => import('./views/Movie/index.vue') */
    },

  ]
})
