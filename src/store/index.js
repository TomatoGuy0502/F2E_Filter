import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      location: '鹽埕',
      time: {
        start: '',
        end: ''
      },
      categories: {
        selectAll: true,
        specific: []
      }
    };
  },
  mutations: {
    setLocation(state, location) {
      state.location = location;
    },
    setTime(state, time) {
      state.time = time;
    },
    setCategories(state, categories) {
      state.categories = categories;
    }
  },
  actions: {
  }
});
