<template>
  <div class="activity-list">
    <h3 class="activity-list__result">Showing {{resultList.length}} {{resultList.length > 1 ? "results" : "result" }} by…</h3>
    <div class="activity-list__tags">
      <span class="tag">{{location}}</span>
      <span class="tag" v-for="tag in categories.specific" :key="tag">
        {{tag}}<i class="far fa-times-circle"></i>
      </span>
    </div>
    <div class="activity-list__card-list" v-if="resultList.length">
      <ActivityCard v-for="card in resultList" v-bind="card" :key="card._id" />
    </div>
    <p class="activity-list__no-result" v-else>目前沒有資料耶 ( ˘•ω•˘ )◞</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { mapState } from 'vuex';
import ActivityCard from '/@/components/ActivityCard.vue';

export default {
  name: 'ActivityList',
  props: {
    msg: String
  },
  components: {
    ActivityCard
  },
  setup() {
    let attractions = ref([]);

    onMounted(async () => {
      const res = await fetch('https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json');
      const data = await res.json();
      attractions.value = data.result.records;
    })
    return {
      attractions
    }
  },
  computed: {
    resultList() {
      const vm = this;
      return this.attractions.filter(function(attraction) {
        return attraction.Zone === vm.location
      })
    },
    ...mapState([
      'location',
      'time',
      'categories'
    ])
  }
}
</script>

<style lang="scss" scoped>
.activity-list {
  height: calc(100vh - 84px);
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  &__result {
    font-size: 24px;
    margin-bottom: 15px;
  }
  &__tags {
    margin-bottom: 10px;
  }
  &__card-list {
    overflow: auto;
    padding-bottom: 40px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__no-result {
    font-size: 24px;
    font-weight: 700;
  }
  > * {
    transition: all .3s;
    padding-left: 40px;
    padding-right: 40px;
  }
}
.tag {
  padding: 8px 16px;
  color: #41B883;
  border: 2px solid #41B883;
  border-radius: 50px;
  margin-right: 12px;
  display: inline-flex;
  align-items: center;
  transition: all .3s;
  cursor: pointer;
  margin-bottom: 10px;
  i {
    margin-left: 6px;
  }
  &:hover {
    background-color: #41B883;
    color: #fff;
  }
}

@media (max-width: 768px) {
  .activity-list {
    height: auto;
  }
}

@media (max-width: 576px) {
  .activity-list > * {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>