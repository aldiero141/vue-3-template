<template>
  <div class="flex flex-col justify-center items-center">
    <video
      v-if="!capturedImage[0]"
      ref="video"
      id="video"
      :srcObject="stream"
      autoplay
      inline
    ></video>
    <img
      v-if="capturedImage[0]"
      :src="capturedImage[0]"
      alt="capture-preview"
    />

    <div class="fixed bottom-10 left-0 right-0 px-16">
      <Button class="mb-4" :text="'Take Picture'" @click="capture()" />
      <Button :type="'danger'" :text="'Cancel'" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Button from "../Button.vue";

// CREATE CAMERA START =======================================================================================
const stream = ref(null);
const video = ref(null);
const constraints = {
  audio: false,
  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 576, ideal: 720, max: 1080 },
    facingMode: "environment",
  },
};

onMounted(() => {
  createCameraElement();
});

onBeforeUnmount(() => {
  stopCameraStream();
});

async function createCameraElement() {
  stream.value = await navigator.mediaDevices.getUserMedia(constraints);
}
function stopCameraStream() {
  stream.value.getTracks().forEach((track) => track.stop());
}
// CREATE CAMERA END =======================================================================================

// CAPTURE CAMERA START ====================================================================================
const emit = defineEmits(["on:capture", "on:change"]);
const capturedImages = ref(null);
const capturedImage = ref([]);

async function capture() {
  //   const video = stream.value;
  const canvas = document.createElement("canvas");
  const video = document.getElementById("video");
  const context = canvas.getContext("2d");

  canvas.width = screen.width;
  canvas.height = screen.height;
  context.drawImage(video, 0, 0, canvas.height, canvas.width);

  //   const getCanvasBlob = (canvas) => {
  //     return new Promise((resolve) => {
  //       canvas.toBlob((blob) => resolve(blob), "image/jpeg");
  //     });
  //   };
  //   const res = await getCanvasBlob(canvas).then(async (blob) => {
  //     try {
  //       const files = window.URL.createObjectURL(blob);
  //       capturedImages = files;
  //       return true;
  //     } catch (error) {
  //       console.log(error);
  //       createCameraElement();
  //       capturedImages = [];
  //     }
  //     return false;
  //   });
  //   let url = capturedImages;

  //   if (res) {
  //     setTimeout(() => {
  //       getUrl(url);

  //       stopCameraStream();
  //       console.log(capture);
  //     }, 1500);
  //   }

  //   async function getUrl(e) {
  //     capturedImage.push(e);
  //     let base64 = String(e).includes(";base64,");
  //     let res = String(e).includes("blob:");
  //     let url;

  //     if (base64) {
  //       base64 = await this.dataURLtoFile(e, "fotoSelfie.jpg");
  //       url = URL.createObjectURL(base64);
  //       emit("on:change", base64);
  //       emit("on:capture", url);
  //       return;
  //     }
  //     res = await this.dataURLtoFile(e, "fotoKtp.jpg");
  //     url = URL.createObjectURL(res);
  //     emit("on:change", base64);
  //     emit("on:capture", url);
  //   }
}
// CAPTURE CAMERA END =======================================================================================
</script>
