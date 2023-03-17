<template>
  <div class="app">
    <panel-form-cpn
      :account="account"
      :accountRules="accountRules"
      :isHideasterisk="no"
      :itemName="'账号'"
      :itemPassword="'密码'"
      :itemProp="'name'"
      :inputType="'password'"
      :small="'small'"
      :isShowVerificationCode="no"
    ></panel-form-cpn>
  </div>
</template>

<script setup lang="ts">
import PanelFormCpn from '@/components/login/panel-form-cpn.vue';
import type { FormRules } from 'element-plus';
import { reactive, ref } from 'vue';

const no = ref(false);

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
