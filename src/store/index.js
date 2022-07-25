import { defineStore } from 'pinia';
import { getMovie, getMovies } from '@/api/movie';

// eslint-disable-next-line import/prefer-default-export
export const useStore = defineStore('mainStore', {
  state: () => ({
    movie: {},
    movies: {},
    basket: {},
  }),
  actions: {
    add(payload) {
      if (this.basket[payload.imdbID]) {
        this.basket[payload.imdbID].quantity += 1;
      } else {
        this.basket[payload.imdbID] = {
          imdbID: payload.imdbID,
          title: payload.title,
          quantity: 1,
        };
      }
    },
    remove(imdbID) {
      if (!this.basket[imdbID]) {
        return;
      }

      this.basket[imdbID].quantity -= 1;

      if (this.basket[imdbID].quantity === 0) {
        delete this.basket[imdbID];
      }
    },
    async getMovie(id) {
      try {
        const data = await getMovie(id);
        this.movie = data.data;
      } catch (error) {
        // catch error here
        // console.warn('error', error);
      }
    },
    async getMovies(search) {
      try {
        const data = await getMovies(search);

        // check if no results from search
        if (data.data.Response === 'True') {
          this.movies = data.data;
        } else {
          this.movies = false;
        }
      } catch (error) {
        // catch error here
        // console.warn('error', error);
      }
    },

  },
});
