<template>
  <div class="flex flex-col justify-center items-center h-[80vh]">
    <Overlay v-if="isShowCamera">
      <mdicon
        class="absolute top-2 right-2 hover:bg-blue-400 hover:bg-opacity-10 cursor-pointer rounded-lg"
        name="close"
        width="25"
        height="25"
        style="color: black; z-index: 9999"
        @click="onClosedCamera"
      />

      <CameraView @on:capture="setCapture($event)" />
    </Overlay>

    <div
      v-if="!isShowCamera"
      class="rounded-lg shadow-xl p-4 max-h-[80vh] w-[20rem] border-2 border-gray-300 border-opacity-25"
      elevation="0"
    >
      <FieldCamera :image="image" @button:clicked="onShowCamera" />
    </div>
  </div>
</template>

<script setup>
import FieldCamera from "./FieldCamera.vue";
import CameraView from "./CameraView.vue";
import Overlay from "../Overlay.vue";

import { ref } from "vue";

const isShowCamera = ref(false);
const image = ref(null);
function onShowCamera() {
  isShowCamera.value = true;
}
function onClosedCamera() {
  isShowCamera.value = false;
}

function setCapture(val) {
  image.value = val;
}

const file = ref(null);
</script>
