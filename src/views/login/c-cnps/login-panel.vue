<template>
  <div class="panel">
    <h1 class="title">谵语后台管理系统</h1>
    <el-tabs v-model="activeName" type="border-card" stretch>
      <el-tab-pane name="account">
        <template #label>
          <el-icon><UserFilled /></el-icon>
          <span class="text">账号登录</span>
        </template>
        <panelaccount></panelaccount>
      </el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    </el-tabs>
    <about-password></about-password>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AboutPassword from './about-password.vue';
import panelaccount from './panel-account.vue';
const activeName = ref('account');
</script>

<style scoped></style>
