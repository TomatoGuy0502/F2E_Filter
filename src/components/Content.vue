<template>
  <h1>this is content {{ activeRoute }}</h1>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  name: 'Content',
  setup() {
    const router = useRouter()
    const activeRoute = computed(() => router.currentRoute.value.path)
    
    return { activeRoute }
  }
}
</script>
