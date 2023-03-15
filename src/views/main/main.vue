<template>
  <div>主页</div>
  <h1>{{ counter.count }}</h1>
  <button @click="x">按钮</button>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/counter';

const counter = useCounterStore();

const x = () => {
  counter.increment(10);
};
</script>

<style scoped></style>
