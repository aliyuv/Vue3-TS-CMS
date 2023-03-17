<template>
  <div>
    <panelformcpn
      :account="account"
      :accountRules="accountRules"
      :isHideasterisk="isHideasterisk"
      :itemName="itemName"
      :itemPassword="itemPassword"
      :inputType="inputType"
      :small="'default'"
      :isShowVerificationCode="isShowVerificationCode"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup lang="ts">
import type { FormRules } from 'element-plus';
import panelformcpn from '@/components/login/panel-form-cpn.vue';
defineProps<{
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
  small?: 'large' | 'default' | 'small';
  isShowVerificationCode: boolean;
  placeholder: {
    account: string;
    code: string;
  };
}>();
</script>

<style scoped></style>
