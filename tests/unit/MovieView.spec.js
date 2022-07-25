import { shallowMount } from '@vue/test-utils';
import MovieView from '@/views/MovieView.vue';
import MovieBasket from '@/components/MovieBasket.vue';
import { setActivePinia, createPinia } from 'pinia';

describe('MovieView.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('basic check basket is here with basket', () => {
    const wrapper = shallowMount(MovieView, {
      props: { },
    });
    expect(wrapper.find('.title').text()).toMatch('Movie View');
    expect(wrapper.findComponent(MovieBasket).exists()).toBe(true);
  });
});
