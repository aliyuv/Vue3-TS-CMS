<template>
  <div class="app">
    <LoginPanel />
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './c-cnps/login-panel.vue';
</script>

<style scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background: url(../../assets/img/login-bg.svg);
}
</style>
