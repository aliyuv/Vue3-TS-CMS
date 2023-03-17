<template>
  <div class="flex justify-center items-center">
    <el-icon>
      <slot name="icon"></slot>
    </el-icon>
    <span class="ml-1">
      <slot name="label"></slot>
    </span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
