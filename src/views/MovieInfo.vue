<template>
  <div class="container">
    <MovieBasket />

    <MovieCard :movie="store.movie" class="info" />
  </div>
</template>

<script setup>
import MovieCard from '@/components/MovieCard.vue';
import MovieBasket from '@/components/MovieBasket.vue';
import { useStore } from '@/store';
import { useRoute } from 'vue-router';

document.title = 'Movie Page 🍿 - Search result';

const store = useStore();
const route = useRoute();

if (route.params.id) {
  store.getMovie(route.params.id);
}
</script>

<style lang="scss" scoped>
.info {
  max-width: 600px;
  margin: 0 auto;
}
</style>
