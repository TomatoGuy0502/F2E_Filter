<template>
<div class="filter-menu-container">
  <div class="filter-menu">
    <div class="filter-menu__section" @click="handleToggle('showLocation')">
      <i class="fas fa-plus filter-menu__section__toggle" v-show="isMobile" v-if="!showLocation"></i>
      <i class="fas fa-minus filter-menu__section__toggle" v-show="isMobile" v-else></i>
      <h3 class="filter-menu__section__title">Location</h3>
      <select class="filter-menu__section__input" v-model="location" v-show="showLocation" @click.stop>
        <option value="鹽埕">鹽埕</option>
        <option value="岡山">岡山</option>
      </select>
    </div>
    <div class="filter-menu__section" @click="handleToggle('showTime')">
      <i class="fas fa-plus filter-menu__section__toggle" v-show="isMobile" v-if="!showTime"></i>
      <i class="fas fa-minus filter-menu__section__toggle" v-show="isMobile" v-else></i>
      <h3 class="filter-menu__section__title">Date</h3>
      <div class="filter-menu__section__content" v-show="showTime" @click.stop>
        <label for="from">from</label>
        <input type="date" id="from" class="filter-menu__section__input" v-model="time.start">
        <label for="to">to</label>
        <input type="date" id="to" class="filter-menu__section__input" v-model="time.end" :min="time.start">
      </div>
    </div>
    <div class="filter-menu__section" @click="handleToggle('showCategories')">
      <i class="fas fa-plus filter-menu__section__toggle" v-show="isMobile" v-if="!showCategories"></i>
      <i class="fas fa-minus filter-menu__section__toggle" v-show="isMobile" v-else></i>
      <h3 class="filter-menu__section__title">Categories</h3>
      <div v-show="showCategories" @click.stop>
        <div class="checkbox-group">
          <input type="checkbox" id="all" v-model="categories.selectAll">
          <label for="all">All</label>
        </div>
        <div class="checkbox-group">
          <input type="checkbox" name="categories" value="Entertainment" id="entertainment" v-model="categories.specific">
          <label for="entertainment">Entertainment</label>
        </div>
        <div class="checkbox-group">
          <input type="checkbox" name="categories" value="Food" id="food" v-model="categories.specific" >
          <label for="food">Food</label>
        </div>
        <div class="checkbox-group">
          <input type="checkbox" name="categories" value="Learning" id="learning" v-model="categories.specific" >
          <label for="learning">Learning</label>
        </div>
        <div class="checkbox-group">
          <input type="checkbox" name="categories" value="Outdoors" id="outdoors" v-model="categories.specific" >
          <label for="outdoors">Outdoors</label>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'FilterMenu',
  data() {
    return {
      isMobile: false,
      showLocation: true,
      showTime: true,
      showCategories: true
    }
  },
  methods: {
    handleToggle(target) {
      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if (width > 768) return;
      this[target] = !this[target]
    },
    debounce(func, delay=250) {
      let timer = null;
    
      return () => {
        let context = this;
        let args = arguments;
    
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(context, args);
        }, delay)
      }
    },
    myResizeHandler(e) {
      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      this.isMobile = width <= 768;
      this.showLocation = width > 768;
      this.showTime = width > 768;
      this.showCategories = width > 768;
    }
  },
  computed: {
    location: {
      get () {
        return this.$store.state.location
      },
      set (value) {
        this.$store.commit('setLocation', value)
      }
    },
    time: {
      get () {
        return this.$store.state.time
      },
      set (value) {
        this.$store.commit('setTime', value)
      }
    },
    categories: {
      get () {
        return this.$store.state.categories
      },
      set (value) {
        this.$store.commit('setCategories', value)
      }
    }
  },
  watch: {
    'time.start': function() {
      if (this.time.start > this.time.end) {
        this.$store.commit('setTime', {
          start: this.time.start,
          end: this.time.start
        })
      }
    },
    // 點擊特定項目後，就把All取消勾選
    'categories.specific': function() {
      this.$store.commit('setCategories', {
        ...this.categories,
        selectAll: this.categories.specific.length === 0
      })
    },
    // 點擊All就清空其他的
    'categories.selectAll': function() {
      if (this.categories.selectAll) {
        this.$store.commit('setCategories', {
          ...this.categories,
          specific: []
        })
      }
    }
  },
  created() {
    this.myResizeHandler();
    window.addEventListener("resize", this.debounce(this.myResizeHandler));
  },
  unmounted() {
    window.removeEventListener("resize", this.debounce(this.myResizeHandler));
  }
}
</script>

<style lang="scss" scoped>
.filter-menu {
  background-color: #EBEBEB;
  padding: 0 40px;
  &__section {
    padding: 24px 0;
    position: relative;
    &__title {
      font-size: 24px;
      font-weight: 700;
      + * {
        margin-top: 15px;
      }
    }
    &__toggle {
      position: absolute;
      top: 28px;
      right: 20px;
    }
    &__content {
      display: grid;
      place-items: center end;
      grid-template-columns: 50px 1fr;
      row-gap: 15px;
      column-gap: 10px;
    }
    &__input {
      width: 100%;
      border: 0;
      padding: 10px;
      border-radius: 3px;
      transition: box-shadow .3s;
      &:focus {
        box-shadow: 0 0 0 3px #41B883;
      }
    }
  }
}
.checkbox-group {
  display: flex;
  align-items: center;
  label {
    width: 100%;
  }
}
input[type="checkbox"] {
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 3px;
  margin: 5px 6px 5px 0;
  -moz-appearance:none;
  -webkit-appearance:none;
  -o-appearance:none;
  &:checked {
    background-color: #41B883;
  }
}

@media (max-width: 768px) {
  .filter-menu {
    &__section:not(:last-child) {
      border-bottom: 1px solid #000;
    }
  }
}

@media (max-width: 576px) {
  .filter-menu {
    padding: 0 20px;
  }
}
</style>