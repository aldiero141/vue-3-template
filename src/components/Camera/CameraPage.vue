<template>
  <div class="flex flex-col justify-center items-center w-full h-[80vh]">
    <Overlay v-if="isShowCamera">
      <CameraView @on:capture="setCapture($event)" @back="onClosedCamera" />
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
