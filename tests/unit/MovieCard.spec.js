import { shallowMount } from '@vue/test-utils';
import MovieCard from '@/components/MovieCard.vue';
import { setActivePinia, createPinia } from 'pinia';

describe('MovieCard.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('renders props title when passed, and only show card without extra information', () => {
    const movie = { Title: 'Movie Title' };
    const wrapper = shallowMount(MovieCard, {
      props: { movie },
    });
    expect(wrapper.find('.title').text()).toMatch(movie.Title);
    expect(wrapper.find('.info').exists()).toBe(false);
  });

  it('renders props full movie info when passed and displayed', () => {
    const movie = {
      Title: 'Movie Title', Plot: 'blah blah', Runtime: 'Runtime', Genre: 'Genre info',
    };
    const wrapper = shallowMount(MovieCard, {
      props: { movie },
    });
    expect(wrapper.find('.title').text()).toMatch(movie.Title);
    expect(wrapper.find('.plot').text()).toMatch(movie.Plot);
  });
});
