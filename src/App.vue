<template>
  <Navbar />
  <main>
    <FilterMenu />
    <router-view />
  </main>
</template>

<script>
import Navbar from '/@/components/Navbar.vue'
import FilterMenu from '/@/components/FilterMenu.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    FilterMenu
  },
  mounted: async function() {
    const res = await fetch('https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json');
    const data = await res.json();
    this.$store.commit('setAttractions', data.result.records)
  },
}
</script>

<style lang="scss">
main {
  background: #F2F2F2;
  // height: calc(100vh - 84px);
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-areas: 
    "filter router-view";
  padding-left: 40px;
}

@media (max-width: 1100px) {
  main {
    padding-left: 0;
  }
}

@media (max-width: 768px) {
  main {
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
    grid-template-areas: 
    "filter" 
    "router-view";
  }
}
</style>