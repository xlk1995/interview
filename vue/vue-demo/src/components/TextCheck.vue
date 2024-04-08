<template>
  <div>
    <input type="checkbox" :checked="props.modelValue" @change="handleChange" />
    <input type="text" :value="props.title" @input="handleChangeTitle" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: "123",
  },
  titleModifiers: {
    default: {},
  },
});
console.log(props.titleModifiers);

const emits = defineEmits(["update:modelValue", "update:title"]);
const handleChange = (e: any) => {
  const v = e.target.checked;
  emits("update:modelValue", v);
};
const handleChangeTitle = (e: any) => {
  const v = e.target.value;
  emits("update:title", v);
};
</script>

<style scoped></style>
