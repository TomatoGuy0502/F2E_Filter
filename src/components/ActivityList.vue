<template>
  <div class="activity-list">
    <h3 class="activity-list__result">Showing {{numberOfResults}} results by…</h3>
    <div class="activity-list__tags">
      <span class="tag" v-for="tag in tags" :key="tag">{{tag}}<i class="far fa-times-circle"></i></span>
    </div>
    <div class="activity-list__card-list">
      <div class="card">
        <img class="card__image" src="https://picsum.photos/220/220" alt="">
        <div class="card__body">
          <h2 class="card__body__title">Kogi Cosby sweater.</h2>
          <p class="card__body__description">Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Aliquam erat volutpat. Integer ut tincidunt orci. Etiam tristique, elit ut consectetur iaculis, metus lectus mattis justo, vel mollis eros neque quis augue. Sed lobortis ultrices lacus, a placerat metus rutrum sit amet. Aenean ut suscipit justo.</p>
          <span class="card__body__organizer">Ethan Foster</span>
          <span class="card__body__category">Entertainment</span>
          <div class="card__body__info">
            <div class="event-place">
              <i class="fa fa-map-marker-alt"></i>
              <span>Kaohsiung City</span>
            </div>
            <div class="event-time">
              <i class="fa fa-calendar-alt"></i>
              <span>2018/5/24 - 2018/5/31</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <img class="card__image" src="https://picsum.photos/220/220" alt="">
        <div class="card__body">
          <h2 class="card__body__title">Kogi Cosby sweater.</h2>
          <p class="card__body__description">Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Aliquam erat volutpat. Integer ut tincidunt orci. Etiam tristique, elit ut consectetur iaculis, metus lectus mattis justo, vel mollis eros neque quis augue. Sed lobortis ultrices lacus, a placerat metus rutrum sit amet. Aenean ut suscipit justo.</p>
          <span class="card__body__organizer">Ethan Foster</span>
          <span class="card__body__category">Entertainment</span>
          <div class="card__body__info">
            <div class="event-place">
              <i class="fa fa-map-marker-alt"></i>
              <span>Kaohsiung City</span>
            </div>
            <div class="event-time">
              <i class="fa fa-calendar-alt"></i>
              <span>2018/5/24 - 2018/5/31</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <img class="card__image" src="https://picsum.photos/220/220" alt="">
        <div class="card__body">
          <h2 class="card__body__title">Kogi Cosby sweater.</h2>
          <p class="card__body__description">Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Aliquam erat volutpat. Integer ut tincidunt orci. Etiam tristique, elit ut consectetur iaculis, metus lectus mattis justo, vel mollis eros neque quis augue. Sed lobortis ultrices lacus, a placerat metus rutrum sit amet. Aenean ut suscipit justo.</p>
          <span class="card__body__organizer">Ethan Foster</span>
          <span class="card__body__category">Entertainment</span>
          <div class="card__body__info">
            <div class="event-place">
              <i class="fa fa-map-marker-alt"></i>
              <span>Kaohsiung City</span>
            </div>
            <div class="event-time">
              <i class="fa fa-calendar-alt"></i>
              <span>2018/5/24 - 2018/5/31</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ActivityList',
  props: {
    msg: String
  },
  setup() {
    let numberOfResults = ref(0)
    let tags = ref(['Entertainment', 'Food'])

    return {
      numberOfResults,
      tags
    }
  }
}
</script>

<style lang="scss" scoped>
.activity-list {
  height: calc(100vh - 84px);
  display: flex;
  flex-direction: column;
  &__result {
    font-size: 24px;
    margin-bottom: 15px;
  }
  &__tags {
    margin-bottom: 20px;
  }
  &__card-list {
    overflow: auto;
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
  i {
    margin-left: 6px;
  }
  &:hover {
    background-color: #41B883;
    color: #fff;
  }
}
.card {
  display: flex;
  background: #fff;
  box-shadow: 2px 2px 8px 0 #0001;
  transition: box-shadow .3s;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  &:hover {
    box-shadow: 2px 2px 9px 0 #0003;
  }
  &__image {
    max-width: 220px;
  }
  &__body {
    padding: 24px 20px;
    &__title {
      font-size: 24px;
      line-height: 36px;
      color: #41B883;
      font-weight: 700;
    }
    &__description {
      margin: 24px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    &__organizer {
      font-weight: 700;
      margin-right: 20px;
    }
    &__category {
      display: inline-block;
      background: #D7D7D7;
      padding: 3px 16px;
      border-radius: 50px;
    }
    &__info {
      margin-top: 16px;
      display: flex;
      flex-wrap: wrap;
      i {
        margin-right: 7px;
        font-size: 16px;
      }
      .event-place {
        margin-right: 20px;
      }
    }
  }
}
</style>