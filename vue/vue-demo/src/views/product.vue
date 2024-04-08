<template>
  <div>
    <TextCheck v-model="isSell" v-model:title.trim="title" />
    <div>
      <span>名称: {{ title }}</span>
      <span>是否有库存: {{ JSON.stringify(isSell) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TextCheck from "../components/TextCheck.vue";
let isSell = ref(false);
let title = ref("小米");
</script>

<style></style>
