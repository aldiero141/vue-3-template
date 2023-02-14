<template>
  <button
    class="cursor-pointer bg-blue-400 rounded-lg p-2 text-white font-bold text-sm uppercase w-full"
    :class="disabled ? 'bg-gray-300' : ''"
    :disabled="disabled"
    @click.stop="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script setup>
// ---- PROPS
const props = defineProps({
  text: String,
  disabled: false,
});

// ---- EMIT
const emit = defineEmits(["click"]); // Defined to use on template
</script>
