import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      location: '楠梓區',
      time: {
        start: '',
        end: ''
      },
      categories: {
        selectAll: true,
        specific: []
      },
      attractions: [],
      search: ''
    }
  },
  mutations: {
    setLocation (state, location) {
      state.location = location
    },
    setTime (state, time) {
      state.time = time
    },
    setCategories (state, categories) {
      state.categories = categories
    },
    setAttractions (state, attractions) {
      state.attractions = attractions
    },
    setSearch (state, search) {
      state.search = search
    }
  },
  actions: {
  }
})
