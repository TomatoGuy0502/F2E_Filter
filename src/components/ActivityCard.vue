<template>
  <div class="card">
    <div class="card__image" :style="{'background-image': 'url(' + Picture1 + ')'}"></div>
    <!-- <img class="card__image" :src="img" alt=""> -->
    <div class="card__body">
      <h2 class="card__body__title">{{Name}}</h2>
      <p class="card__body__description">{{Description}}</p>
      <span class="card__body__organizer">{{organizer}}</span>
      <span class="card__body__category">{{category}}</span>
      <div class="card__body__info">
        <div class="event-place">
          <i class="fa fa-map-marker-alt"></i>
          <span>{{Add}}</span>
        </div>
        <div class="event-time">
          <i class="fa fa-calendar-alt"></i>
          <span>{{timeStart}} - {{timeEnd}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityCard',
  props: {
    Picture1: String,
    Name: String,
    Description: {
      type: String,
      default: '高雄的景點！歡迎來玩！'
    },
    organizer: {
      type: String,
      default: '高雄市'
    },
    category: {
      type: String,
      default: 'Entertainment'
    },
    Add: {
      type: String,
      default: '高雄'
    },
    timeStart: {
      type: String,
      default: '2020/10/01'
    },
    timeEnd: {
      type: String,
      default: '2020/11/30'
    }
  }
}
</script>

<style lang="scss" scoped>
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
    background-position: center;
    background-size: cover;
    flex: 1 0 235px;
  }
  &__body {
    padding: 24px 20px;
    transition: all .3s;
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
      -webkit-line-clamp: 3;
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
@media (max-width:1100px) {
  .card__body__info {
    flex-direction: column;
  }
  .event-place {
    margin-right: 0;
    margin-bottom: 10px;
  }
  .card {
    flex-direction: column;
    &__image {
      flex: 1 0 300px;
    }
  }
}
@media (max-width: 576px) {
  .card__body {
    padding: 16px 15px;
  }
}
</style>