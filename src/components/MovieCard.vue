<template>
  <div class="card fade-in-image">
    <h3 class="title">
      {{ movie.Title }}
    </h3>

    <img :src="movie.Poster" :alt="movie.Title + 'poster'" />

    <div v-if="hasInfo" class="info">
      <p class="plot">{{ movie.Plot }}</p>
      <p>Box office: {{ movie.BoxOffice }}</p>
      <p>Type: {{ movie.Type }}</p>
      <p>Runtime: {{ movie.Runtime }}</p>
      <p>Director: {{ movie.Director }}</p>
      <p>Genre: {{ movie.Genre }}</p>
      <p>Actors: {{ movie.Actors }}</p>
      <p>Awards: {{ movie.Awards }}</p>
    </div>

    <div class="bottom">
      <p>Year: {{ movie.Year }}</p>
      <p v-if="hasInfo" class="right">Rating: {{ movie.imdbRating }}</p>
    </div>

    <router-link v-if="!hasInfo" :to="'/movie/' + movie.imdbID" class="cta">
      Show more
    </router-link>
    <button @click.prevent="add()" @keydown="add()" class="cta">Add to basket</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from '@/store';

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  movie: {
    type: Object,
    default: () => ({}),
  },
});

const store = useStore();

const hasInfo = computed(() => !!props.movie.Plot);

const add = () => {
  const payload = {
    imdbID: props.movie.imdbID,
    title: props.movie.Title,
  };

  store.add(payload);
};

</script>

<style lang="scss" scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.fade-in-image {
  animation: fadeIn 3s;
}
.card {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: rgb(2, 2, 28);
  padding: 10px;
  margin-bottom: 10px;
  color: white;
  border-radius: 5px;

  img {
    margin: 0 auto;
    margin-bottom: 10px;
    max-width: 400px;
    max-height: 300px;
  }

  .title {
    font-weight: 700;
    font-size: 2rem;
  }
  .bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex:1;

    .right {
      font-weight: 700;
    }
  }
  .cta {
    display: flex;
    justify-content: center;
    background-color: white;;
    color: black;
    text-align: center;
    padding: 10px;
    text-decoration: none;
    border: 2px solid white;
    font-size: 1rem;
    font-family: 'Inconsolata', monospace;
    font-weight: 700;
    margin-bottom: 5px;

    &:hover {
      border: 2px solid white;
      background-color: darkblue;
      font-weight: 700;
      color: white;
    }
  }

}
</style>
