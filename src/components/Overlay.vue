<template>
  <div
    class="flex flex-col justify-center items-center w-screen h-screen bg-opacity-70 bg-black absolute inset-0 -top-10"
    style="z-index: 99999"
  >
    <div
      class="bg-white opacity-100 rounded-lg"
      style="z-index: 9999"
      :style="{
        width: props.width ? `${props.width}` : '100vw',
        height: props.height ? `${props.height}` : '100vh',
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  width: { type: String, default: "" },
  height: { type: String, default: "" },
});
</script>
