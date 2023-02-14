<template>
  <button
    v-for="(item, i) in items"
    class="cursor-pointer bg-blue-400 rounded-lg mb-6 p-3 text-white capitalize font-bold"
    :class="item === 'DOB' ? 'bg-gray-300' : ''"
    :key="i"
    :disabled="item === 'DOB' ? true : false"
    @click.stop="$emit('click', item)"
  >
    {{ item }}
  </button>
</template>

<script setup>
// ---- PROPS
const props = defineProps({
  items: Array,
});

// ---- EMIT
const emit = defineEmits(["click"]); // Defined to use on template
</script>
