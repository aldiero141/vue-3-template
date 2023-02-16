<template>
  <Transition name="slide-right">
    <div
      v-if="status"
      class="flex flex-col rounded justify-center fixed min-w-[20vw] h-[4rem] top-5 right-5 text-white p-4"
      :class="
        type == 'error'
          ? 'bg-red-500'
          : type == 'success'
          ? 'bg-green-400'
          : 'bg-yellow-300'
      "
      style="z-index: 1000"
    >
      <div class="capitalize font-bold">
        {{ type }}
      </div>
      <div class="capitalize text-sm">
        {{ message }}
      </div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  type: String,
  message: String,
  status: Boolean,
});
</script>

<style scoped>
.slide-right-enter-active {
  transition: 0.7s;
}

.slide-right-leave-active {
  transition: 1.2s;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(120vh);
}
</style>
