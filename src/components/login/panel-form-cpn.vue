<template>
  <el-form
    :model="account"
    ref="formRef"
    label-width="60px"
    :rules="accountRules"
    :hide-required-asterisk="isHideasterisk"
  >
    <el-form-item :prop="itemProp" :label="itemName">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item :prop="itemProp" :label="itemPassword">
      <el-input v-model="account.password" :type="inputType" />
      <el-button type="primary" :size="small" v-show="isShowVerificationCode"
        >获取验证码
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import type { FormRules } from 'element-plus';

defineProps<{
  account: {
    name: string;
    password: string;
  };
  accountRules: FormRules;
  isHideasterisk: boolean;
  itemName: string;
  itemPassword: string;
  itemProp: string;
  inputType: string;
  small: 'large' | 'default' | 'small';
  isShowVerificationCode: boolean;
}>();
</script>

<style scoped></style>
