<template>
  <nav class="navbar">
    <h1 class="navbar__title">GoBear</h1>
    <div class="navbar__search">
      <label for="navbar__input"><i class="fa fa-search"></i></label>
      <input class="navbar__input" id="navbar__input" type="text" placeholder="Explore your own activity" v-model="search">
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    search: {
      get () {
        return this.$store.state.search
      },
      set (value) {
        this.$store.commit('setSearch', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: grid;
  padding: 24px 40px;
  grid-template-columns: 300px 1fr;
  justify-items: start;
  background: #41B883;
  &__title {
    padding-left: 40px;
    font-size: 36px;
    font-weight: 700;
  }
  &__search {
    margin-left: 40px;
    border-bottom: 2px solid #fff;
    display: flex;
    align-items: center;
  }
  &__input {
    background: transparent;
    border: 0;
    font-size: 20px;
    outline: none;
    padding: 0;
    height: 34px;
    color: #fff;
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
  .fa-search {
    color: #fff;
    font-size: 24px;
    margin-right: 12px;
  }
}

@media (max-width: 1100px) {
  .navbar {
    padding-left: 0;
    padding-right: 0;
  }
}

@media (max-width: 768px) {
  .navbar {
    place-items: center;
    grid-template-columns: auto;
    padding: 12px 40px;
    &__title {
      padding-left: 0;
      margin-bottom: 6px;
    }
    &__search {
      margin-left: 0;
    }
  }
}
@media (max-width: 576px) {
  .navbar {
    padding: 12px 20px;
  }
}
</style>