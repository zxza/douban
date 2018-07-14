<template lang="html">
  <div>
    <section class="grid has-search-bar">
      <div v-if="inTheater.title">
        <h2>{{inTheater.title}}
          <router-link tag='span' :to="{ name: 'list', query: {type: inTheater.type}}">更多</router-link>
        </h2>
        <div class="card">
          <router-link :to="{ name: 'detail', params: {id : item.id}}" class="item"
                       v-for='(item, index) in inTheater.subjects'
                       :key = 'index'>
          </router-link>
        </div>
      </div>
      <Spinner :show='loading'></Spinner>
    </section>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner'
import {mapState} from 'vuex'
import {API_TYPE, fetchMoviesByType} from '@/store/api.js'
export default {
  components: {
    Spinner
  },
  data() {
    return {
      loading: true,
      inTheater: {
        type: ''
      },
      comingSoon: {
        type: ''
      }
    }
  },
  mounted() {
    var start = 0, count = 9;
    fetchMoviesByType(API_TYPE.movie.in_theaters, start, count)
      .then((data) => {
        this.inTheater = data;
        this.inTheater.type = API_TYPE.movie.in_theaters;
        this.loading = false;
      });
    fetchMoviesByType(API_TYPE.movie.coming_soon, start, count)
      .then((data) => {
        this.comingSoon = data;
        this.comingSoon.type = API_TYPE.movie.coming_soon;
        this.loading = false;
      })
  },
  updated() {

  },
  destroyed() {

  }
}
</script>

<style lang="css" scoped>
</style>
