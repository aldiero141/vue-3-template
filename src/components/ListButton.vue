<template>
  <div
    class="cursor-pointer bg-blue-400 rounded-lg mb-6 p-4 text-white capitalize font-bold"
    v-for="(item, i) in items"
    :key="i"
    @click.stop="$emit('click', item)"
  >
    {{ item }}
  </div>
</template>

<script setup>
// ---- PROPS
const props = defineProps({
  items: Array,
});

// ---- EMIT
const emit = defineEmits(["click"]); // Defined to use on template
</script>
