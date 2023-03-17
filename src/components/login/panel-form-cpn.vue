<template>
  <el-form
    :model="account"
    label-width="60px"
    :rules="accountRules"
    :hide-required-asterisk="isHideasterisk"
  >
    <el-form-item
      :prop="isShowVerificationCode ? `phone` : `name`"
      :label="itemName"
    >
      <el-input v-model="nameModel" :placeholder="placeholder.account" />
    </el-form-item>
    <el-form-item
      :prop="isShowVerificationCode ? `code` : `password`"
      :label="itemPassword"
    >
      <el-input
        v-model="passwordModel"
        :type="inputType"
        :style="isShowVerificationCode ? `width: 120px;margin-right: 6px` : ``"
        :placeholder="placeholder.code"
        :show-password="isShowVerificationCode ? false : true"
      />
      <el-button type="primary" v-show="isShowVerificationCode"
        >获取验证码
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import type { FormRules } from 'element-plus';
import { computed } from 'vue';

const props = defineProps<{
  account: {
    name: string;
    password: string;
    phone: string;
    code: string;
  };
  accountRules: FormRules;
  isHideasterisk: boolean;
  itemName: string;
  itemPassword: string;
  inputType: string;
  small: 'large' | 'default' | 'small';
  isShowVerificationCode: boolean;
  placeholder: {
    account: string;
    code: string;
  };
}>();

const nameModel = computed({
  get: () =>
    props.isShowVerificationCode ? props.account.phone : props.account.name,
  set: (value) =>
    props.isShowVerificationCode
      ? (props.account.phone = value)
      : (props.account.name = value)
});

const passwordModel = computed({
  get: () =>
    props.isShowVerificationCode ? props.account.code : props.account.password,
  set: (value) =>
    props.isShowVerificationCode
      ? (props.account.code = value)
      : (props.account.password = value)
});
</script>

<style scoped></style>
