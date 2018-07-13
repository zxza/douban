import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const movies = r => require.ensure([],() => r(require('@/views/movies')),'movies');
const movieDetail = r => require.ensure([], () => r(require('@/views/movie-detail')),'movieDetail')
const movieList = r => require.ensure([], () => r(require('@/views/movie-list')))
const searchList = r => require.ensure([], () => r(require('@/views/search-list')))

export default new Router({
  routes: [
    {
      path: '/',
      name: 'douban',
      component: movieDetail
    },
    {
      path: '/movies',
      name: 'movies',
      component: movies
    },
    {
      path: '/movie-detail',
      name: 'detail',
      component: movieDetail
    },
    {
      path: '/movie-list',
      name: 'list',
      component: movieList
    },
    {
      path: '/search-list',
      name: 'searchList',
      component: searchList
    }
  ]
})
