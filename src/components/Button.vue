<template>
  <button
    class="cursor-pointer bg-blue-400 hover:bg-blue-500 rounded-lg p-2 text-white font-bold text-sm uppercase w-full"
    :class="{
      'bg-gray-300': disabled,
      'bg-red-500 hover:bg-red-600': type == 'danger',
    }"
    :disabled="disabled"
    @click.stop="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script setup>
// ---- PROPS
const props = defineProps({
  disabled: false,
  text: String,
  type: String,
});

// ---- EMIT
const emit = defineEmits(["click"]); // Defined to use on template
</script>
