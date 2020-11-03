<template>
  <div class="content">
    <div v-if="!card">Loading</div>
    <div v-else>
      <div class="content__breadcrumb">
        <router-link to="/">Explore</router-link>  /  {{card.Name}}
      </div>
      <div class="content__card-container">
        <ActivityCard class="detail" v-bind="card"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { mapState } from 'vuex';
import ActivityCard from '/@/components/ActivityCard.vue';

export default {
  name: 'Content',
  components: {
    ActivityCard
  },
  computed: {
    _id() {
      console.log(this.$router.currentRoute.value)
      return this.$router.currentRoute.value.params._id
    },
    ...mapState([
      'attractions'
    ]),
    card() {
      const vm = this;
      return this.attractions.filter(attraction => attraction._id == this._id )[0] || null;
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding: 24px 0;
  &__breadcrumb {
    transition: all .3s;
    margin: 0 40px 24px;
    padding: 16px;
    background-color: #EBEBEB;
  }
  &__card-container {
    transition: all .3s;
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (max-width: 576px) {
  .content {
    &__breadcrumb {
      margin-left: 20q;
      margin-right: 20px;
    }
    &__card-container {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>