<template>
  <button
    class="cursor-pointer bg-blue-400 rounded-lg p-2 text-white font-bold size-4 text-sm uppercase w-full"
    @click.stop="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script setup>
// ---- PROPS
const props = defineProps({
  text: String,
});

// ---- EMIT
const emit = defineEmits(["click"]); // Defined to use on template
</script>
