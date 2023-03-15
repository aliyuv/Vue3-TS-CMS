import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment(n: number) {
      this.count += n;
    },
    dounble(n: number) {
      this.increment(n);
    }
  }
});
