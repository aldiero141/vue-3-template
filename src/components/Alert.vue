<template>
  <div
    class="flex flex-col rounded justify-center fixed min-w-[20vw] h-[4rem] top-5 right-5 text-white p-4"
    :class="
      type == 'error'
        ? 'bg-red-500'
        : type == 'success'
        ? 'bg-green-400'
        : 'bg-yellow-300'
    "
  >
    <div class="capitalize font-bold">
      {{ type }}
    </div>
    <div class="capitalize text-sm">
      {{ message }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: String,
  message: String,
});
</script>
