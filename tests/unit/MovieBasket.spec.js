import { shallowMount } from '@vue/test-utils';
import MovieBasket from '@/components/MovieBasket.vue';
import { setActivePinia, createPinia } from 'pinia';

describe('MovieBasket.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('basic check basket is here', () => {
    const wrapper = shallowMount(MovieBasket, {
      props: { },
    });
    expect(wrapper.find('.title').text()).toMatch('Basket');
  });
});
