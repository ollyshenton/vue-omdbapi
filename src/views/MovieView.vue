<template>
  <div class="container">
    <h1 class="title">Movie View</h1>

    <form class="search-bar">
      <label for="search"> Search for a movie:
        <input v-model="search" type="text" name="search" id="search"
          placeholder="example Batman" />
      </label>
      <button @click.prevent="searchMovie" @keydown="searchMovie">
        Go 🍿
      </button>
      <button @click.prevent="reset" @keyup="reset" class="clear">Clear</button>
    </form>

    <MovieBasket />

    <div v-if="hasMovie">
      <h2 class="title">Results for: {{ search }}</h2>
      <div class="grid">
        <template v-for="(movie, key) in store.movies?.Search" :key="key">
          <MovieCard :movie="movie" />
        </template>
      </div>
    </div>
    <div v-if="!store.movies" class="no-results">
      Sorry, no results
    </div>

  </div>
</template>

<script setup>
import { useStore } from '@/store';
import { ref, computed } from 'vue';
import MovieBasket from '@/components/MovieBasket.vue';
import MovieCard from '@/components/MovieCard.vue';

document.title = 'Movie Page 🍿 - Search 🔎';

const store = useStore();
const search = ref('');

const hasMovie = computed(() => Object.entries(store.movies).length > 1);

const searchMovie = () => {
  if (search.value !== '') {
    store.getMovies(search.value);
  }
};

const reset = () => {
  store.$reset();
  search.value = '';
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px 10px;

    @media (min-width: 700px) {
      grid-template-columns: 1fr 1fr;

    }
    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
}
.title{
  margin-top: 0;
}
.search-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;

  input {
    height: 30px;
    border-radius: 0;
    padding-left: 5px;
    outline: none;
  }
  button {
    border: 1px;
    background-color: black;
    color: white;

    &:hover {
      font-weight: 700;
    }
  }
}
.no-results {
  margin-top: 20px;
  font-weight: 700;
  font-size: 2rem;
}

.clear {
  margin-left: 10px;
}
</style>
