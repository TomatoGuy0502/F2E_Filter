<template>
<div class="filter-menu-container">
  <div class="filter-menu">
    <div class="filter-menu__section">
      <h3 class="filter-menu__section__title">Location</h3>
      <select class="filter-menu__section__input" v-model="location" @change="setLocation(location)">
        <option value="鹽埕">鹽埕</option>
        <option value="岡山">岡山</option>
      </select>
    </div>
    <div class="filter-menu__section">
      <h3 class="filter-menu__section__title">Date</h3>
      <div class="filter-menu__section__content">
        <label for="from">from</label>
        <input type="date" id="from" class="filter-menu__section__input" v-model="time.start" @change="setTime(time)">
        <label for="to">to</label>
        <input type="date" id="to" class="filter-menu__section__input" v-model="time.end" :min="time.start">
      </div>
    </div>
    <div class="filter-menu__section">
      <h3 class="filter-menu__section__title">Categories</h3>
      <div class="checkbox-group">
        <input type="checkbox" id="all" v-model="categories.selectAll">
        <label for="all">All</label>
      </div>
      <div class="checkbox-group">
        <input type="checkbox" name="categories" value="Entertainment" id="entertainment" v-model="categories.specific" @change="setCategories(categories)">
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
</template>

<script>
import { ref, reactive, watch, watchEffect } from 'vue';
import { mapMutations } from 'vuex';

export default {
  name: 'FilterMenu',
  setup(props, { root }) {
    let location = ref('')
    let time = reactive({
      start: '',
      end: ''
    });
    watchEffect(() => {
      if (time.start > time.end) {
        time.end = time.start
      }
    })

    let categories = reactive({
      selectAll: true,
      specific: []
    })
    // 當其他都沒有打勾的時候，自動把All打勾
    watchEffect(() => {
      categories.selectAll = categories.specific.length === 0;
    })
    // 選擇All的時候把其他都清掉
    watch(() => categories.selectAll, () => {
      if (categories.selectAll) {
        categories.specific.length = 0 
      }
    })

    return {
      location,
      time,
      categories,
      ...mapMutations([
        'setLocation',
        'setTime',
        'setCategories'
      ])
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-menu {
  background-color: #EBEBEB;
  padding: 0 40px;
  &__section {
    padding: 24px 0;
    &__title {
      font-size: 24px;
      margin-bottom: 15px;
      font-weight: 700;
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
</style>