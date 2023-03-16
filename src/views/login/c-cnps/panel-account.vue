<template>
  <div class="app">
    <el-form
      :model="account"
      ref="formRef"
      label-width="60px"
      :rules="accountRules"
    >
      <el-form-item prop="name" label="账号">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input v-model="account.password" type="password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { FormRules } from 'element-plus';
import { reactive } from 'vue';

const account = reactive({
  name: '',
  password: ''
});

const accountRules: FormRules = {
  name: [
    { required: true, message: '必须输入用户名', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9_]{4,16}$/,
      message: '必须4-16位的字母数字下划线',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,16}$/,
      message: '长度必须在6-16个字符',
      trigger: 'blur'
    }
  ]
};
</script>

<style scoped></style>
