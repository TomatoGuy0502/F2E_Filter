<template>
  <div class="activity-list">
    <h3 class="activity-list__result">Showing {{numberOfResults}} results by…</h3>
    <div class="activity-list__tags">
      <span class="tag">{{location}}</span>
      <span class="tag" v-for="tag in categories.specific" :key="tag">
        {{tag}}<i class="far fa-times-circle"></i>
      </span>
    </div>
    <div class="activity-list__card-list">
      <ActivityCard v-for="card in cards" v-bind="card" :key="card.title" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
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
    let numberOfResults = ref(0)
    let tags = ref(['Entertainment', 'Food'])
    let cards = ref([
      {
        img: 'https://picsum.photos/220/220',
        title: 'Kogi Cosby sweater.',
        description: 'Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Aliquam erat volutpat. Integer ut tincidunt orci. Etiam tristique, elit ut consectetur iaculis, metus lectus mattis justo, vel mollis eros neque quis augue. Sed lobortis ultrices lacus, a placerat metus rutrum sit amet. Aenean ut suscipit justo.',
        organizer: 'Ethan Foster',
        category: 'Entertainment',
        place: 'Kaohsiung City',
        timeStart: '2018/5/24',
        timeEnd: '2018/5/31'
      },
      {
        img: 'https://picsum.photos/220/220',
        title: 'Kogi Cosby sweater.',
        description: 'Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Aliquam erat volutpat. Integer ut tincidunt orci. Etiam tristique, elit ut consectetur iaculis, metus lectus mattis justo, vel mollis eros neque quis augue. Sed lobortis ultrices lacus, a placerat metus rutrum sit amet. Aenean ut suscipit justo.',
        organizer: 'Ethan Foster',
        category: 'Entertainment',
        place: 'Kaohsiung City',
        timeStart: '2018/5/24',
        timeEnd: '2018/5/31'
      },
      {
        img: 'https://picsum.photos/220/220',
        title: 'Kogi Cosby sweater.',
        description: 'Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Aliquam erat volutpat. Integer ut tincidunt orci. Etiam tristique, elit ut consectetur iaculis, metus lectus mattis justo, vel mollis eros neque quis augue. Sed lobortis ultrices lacus, a placerat metus rutrum sit amet. Aenean ut suscipit justo.',
        organizer: 'Ethan Foster',
        category: 'Entertainment',
        place: 'Kaohsiung City',
        timeStart: '2018/5/24',
        timeEnd: '2018/5/31'
      }
    ])

    return {
      numberOfResults,
      tags,
      cards
    }
  },
  computed: mapState([
    'location',
    'time',
    'categories'
  ])
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
  > * {
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

@media (max-width: 576px) {
  .activity-list > * {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>