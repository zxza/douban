<template lang="html">
  <div>
    <section class="grid has-search-bar">
      <div v-if="inTheater.title">
        <h2>{{inTheater.title}}
          <router-link :to="{ name: '', params: {} }"></router-link>
        </h2>
        <div class="card">
          <router-link :to="{ name: '', params: {} }">

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
import {API_TYPE, fetchMoviesByType} from '@/store/api'
export default {
  components: {
    Spinner
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {

  },
  updated() {

  },
  destroyed() {

  }
}
</script>

<style lang="css" scoped>
</style>
