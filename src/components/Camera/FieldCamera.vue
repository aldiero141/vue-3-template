<template>
  <div class="relative">
    <div
      class="flex flex-col justify-center items-center rounded-lg bg-white border-2 border-dashed border-blue-400 min-h-[10rem] w-full z-9998"
      :class="{
        'px-4': !props.image,
        'px-6': props.image,
      }"
    >
      <Button
        v-if="!props.image"
        @click="$emit('button:clicked')"
        :text="'Open Camera'"
      />
      <img v-if="props.image" :src="props.image" alt="camera-capture" />
    </div>
  </div>
</template>

<script setup>
import Button from "../Button.vue";

const props = defineProps({
  image: String,
});

const emit = defineEmits(["button:clicked"]);
</script>
