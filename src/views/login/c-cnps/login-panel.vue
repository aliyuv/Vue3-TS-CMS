<template>
  <div class="panel text-center w-80 mb-36">
    <h1 class="mb-4 text-3xl font-extrabold">谵语后台管理系统</h1>
    <el-tabs v-model="activeName" type="border-card" stretch>
      <el-tab-pane name="account">
        <template #label>
          <panel-common-content>
            <template #icon>
              <UserFilled />
            </template>
            <template #label> 账号登录 </template>
          </panel-common-content>
        </template>
        <panelaccount :activeName="activeName"></panelaccount>
      </el-tab-pane>
      <el-tab-pane label="Config" name="phone">
        <template #label>
          <panel-common-content>
            <template #icon>
              <Iphone />
            </template>
            <template #label> 手机登录 </template>
          </panel-common-content>
        </template>
        <panelaccount :activeName="activeName"></panelaccount>
      </el-tab-pane>
    </el-tabs>
    <about-password></about-password>
    <el-button type="primary" class="w-full">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AboutPassword from './about-password.vue';
import panelaccount from './panel-account.vue';
const activeName = ref('account');
</script>

<style scoped></style>
