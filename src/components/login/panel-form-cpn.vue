<template>
  <el-form
    :model="account"
    ref="formRef"
    label-width="60px"
    :rules="accountRules"
    :hide-required-asterisk="isHideasterisk"
  >
    <el-form-item :prop="itemProp" :label="itemName">
      <el-input v-model="account.name" :placeholder="placeholder.account" />
    </el-form-item>
    <el-form-item :prop="itemProp" :label="itemPassword">
      <el-input
        v-model="account.password"
        :type="inputType"
        :style="isShowVerificationCode ? `width: 120px;margin-right: 6px` : ``"
        :placeholder="placeholder.code"
      />
      <el-button type="primary" v-show="isShowVerificationCode"
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
  placeholder: {
    account: string;
    code: string;
  };
}>();
</script>

<style scoped></style>
