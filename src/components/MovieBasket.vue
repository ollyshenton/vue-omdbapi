<template>
  <div class="basket">
    <h2 class="title">Basket</h2>

    <div v-if="Object.keys(basket).length === 0">Basket is empty</div>

    <template v-else v-for="item in basket" :key="item">
      <div class="baket-row">
        {{ item.title }} |
        Count: <span class="count">{{ item.quantity }}</span>

        <button @click.prevent="btnRemove(item.imdbID)"
          @keydown="btnRemove(item.imdbID)" class="remove">
          Remove
        </button>
      </div>
    </template>
  </div>
</template>

<script setup>
import { useStore } from '@/store';

const store = useStore();

const { basket } = store;

const btnRemove = (imdbID) => {
  store.remove(imdbID);
};
</script>

<style lang="scss" scoped>
.basket {
  display: flex;
  align-self: center;
  flex-direction: column;
  max-width: 450px;
  background-color: rgb(2, 2, 28);
  color: white;
  border-radius: 5px;
  padding: 15px;
  margin: 20px auto;

  .title {
    margin: 0;
  }
}
.basket-row {
  display: flex;
  flex-direction: row;
}
.count {
  background-color: white;
  color: black;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  padding: 5px;
  line-height: 2.2;
  display: inline-block;
  justify-content: center;
  align-self: center;
  line-height: .8rem;
}
.remove {
  background-color: white;
  border: 0;
  border-radius: 0;
  margin-left: 9px;
}
</style>
