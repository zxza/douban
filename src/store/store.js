import Vue from 'vue'
import Vuex from 'vuex'
import action from './action'
import mutation from './mutation'

Vue.use(Vuex);

var state = {

}

export default new Vuex.Store({
  state,
  action,
  mutation
})
