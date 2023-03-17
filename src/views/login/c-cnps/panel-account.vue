<template>
  <div class="app">
    <panel-common-login
      :accountRules="accountRules"
      :account="account"
      :placeholder="
        activeName === `phone`
          ? { account: `请输入手机号`, code: `请输入验证码` }
          : { account: `请输入账号`, code: `请输入密码` }
      "
      :isHideasterisk="activeName === `phone` ? true : false"
      :isShowVerificationCode="activeName === `phone` ? true : false"
      :itemName="activeName === `phone` ? `手机号` : `账号`"
      :itemPassword="activeName === `phone` ? `验证码` : `密码`"
      :inputType="activeName === `phone` ? `text` : `password`"
    />
  </div>
</template>

<script setup lang="ts">
import PanelCommonLogin from '@/components/login/panel-common-login.vue';
import type { FormRules } from 'element-plus';
import { reactive } from 'vue';

defineProps<{
  activeName: string;
}>();

const account = reactive({
  name: '',
  password: '',
  phone: '',
  code: ''
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
      pattern: /^[a-z0-9]{6,16}$/,
      message: '长度必须在6-16个字符',
      trigger: 'blur'
    }
  ],
  phone: [
    { required: true, message: '必须输入手机号', trigger: 'blur' },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: '请输入正确的手机号',
      trigger: 'blur'
    }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    {
      pattern: /^\d{6}$/,
      message: '请输入6位数字验证码',
      trigger: 'blur'
    }
  ]
};
</script>

<style scoped></style>
