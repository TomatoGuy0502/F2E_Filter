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
  }
}
</script>

<style lang="scss">
main {
  background: #F2F2F2;
  height: calc(100vh - 84px);
  display: grid;
  column-gap: 40px;
  grid-template-columns: 300px 1fr;
  grid-template-areas: 
    "filter router-view";
  padding: 0 40px;
  & > *:nth-child(2) {
    padding: 24px 0;
  }
}
</style>