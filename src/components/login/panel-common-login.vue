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
import panelformcpn from '@/components/login/panel-form-cpn.vue';
import type { FormRules } from 'element-plus';
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
  isShowVerificationCode: boolean;
  placeholder: {
    account: string;
    code: string;
  };
}>();
</script>

<style scoped></style>
