<template>
  <div class="app flex justify-between items-center">
    <el-checkbox v-model="checked" label="记住密码" size="large" />
    <el-link type="primary">忘记密码</el-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(false);
</script>

<style scoped></style>
