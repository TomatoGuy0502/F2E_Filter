<template>
  <h1>404 Not Found {{ activeRoute }}</h1>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  name: 'NotFound',
  setup() {
    const router = useRouter()
    const activeRoute = computed(() => router.currentRoute.value.path)
    
    return { activeRoute }
  }
}
</script>
