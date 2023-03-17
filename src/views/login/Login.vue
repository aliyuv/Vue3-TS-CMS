<template>
  <div class="app flex justify-center items-center h-screen w-screen">
    <LoginPanel />
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './c-cnps/login-panel.vue';
</script>

<style scoped>
.app {
  background: url(../../assets/img/login-bg.svg);
}
</style>
