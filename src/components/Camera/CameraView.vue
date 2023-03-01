<template>
  <div class="flex flex-col justify-center items-center w-full">
    <mdicon
      class="absolute top-7 right-2 hover:bg-blue-400 hover:bg-opacity-10 cursor-pointer rounded-lg"
      name="close"
      width="25"
      height="25"
      style="color: white; z-index: 9999"
      @click="close()"
    />
    <video
      v-if="!capturedImage[0]"
      class="w-full h-full"
      id="video"
      autoplay
      playsinline
    />
    <img
      v-if="capturedImage[0]"
      :src="capturedImage[0]"
      alt="capture-preview"
    />

    <div v-if="!capturedImage[0]" class="fixed bottom-10 left-0 right-0 px-16">
      <Button class="mb-4" :text="'Take Picture'" @click="capture()" />
      <Button :type="'danger'" :text="'Cancel'" @click="close()" />
    </div>
    <div v-if="capturedImage[0]" class="fixed bottom-10 left-0 right-0 px-16">
      <Button class="mb-4" :text="'Use Picture'" @click="$emit('back')" />
      <Button :text="'Retake Picture'" @click="createCameraElement()" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Loader from "../Loader.vue";
import Button from "../Button.vue";

const loading = ref(true);

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
  //   stopCameraStream();
});

async function createCameraElement() {
  const video = document.getElementById("video");

  //   if (props.type === "selfie") {
  //     video.style.webkitTransform = "scaleX(-1)";
  //     video.style.transform = "scaleX(-1)";
  //     video.style.filter = "fliph";
  //     faceMode = "user";
  //   }

  if (window.stream) {
    window.stream.getTracks().forEach((track) => {
      track.stop();
    });
  }

  const res = await navigator.mediaDevices
    .getUserMedia(constraints)
    .then(async (stream) => {
      window.stream = stream;
      video.srcObject = stream;
      video.addEventListener("loadedmetadata", function () {
        video.play();
      });
      const track = window.stream.getVideoTracks()[0];
      const settings = track.getSettings();
      loading.value = false;
      return true;
    })
    .catch((err) => {
      console.error(`getUserMedia() error : ${err}`);
      loading.value = false;
      return false;
    });
}

function stopCameraStream() {
  const video = document.getElementById("video");
  const tracks = video.srcObject.getTracks();
  video.src = "";
  tracks.forEach((track) => {
    track.stop();
  });
}

function close() {
  stopCameraStream();
  emit("back");
}
// CREATE CAMERA END =======================================================================================

// CAPTURE CAMERA START ====================================================================================
const emit = defineEmits(["on:capture", "on:change", "back"]);
const capturedImages = ref(null);
const capturedImage = ref([]);

async function capture() {
  //   const video = stream.value;
  const canvas = document.createElement("canvas");
  const video = document.getElementById("video");
  const context = canvas.getContext("2d");

  const videoHeight = video.videoHeight;
  const videoWidth = video.videoWidth;
  canvas.height = videoHeight;
  canvas.width = videoWidth;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  const getCanvasBlob = (canvas) => {
    return new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), "image/jpeg");
    });
  };
  const res = await getCanvasBlob(canvas).then(async (blob) => {
    try {
      const files = window.URL.createObjectURL(blob);
      capturedImages.value = files;
      return true;
    } catch (error) {
      console.log(error);
      createCameraElement();
      capturedImages.value = [];
    }
    return false;
  });
  let url = capturedImages.value;

  //   if (res && this.type === "selfie") {
  //         const img = new Image();
  //         img.src = capturedImages;
  //         img.addEventListener("load", function () {
  //           context.scale(-1, 1);
  //           context.drawImage(img, -img.width, 0);
  //           context.setTransform(1, 0, 0, 1, 0, 0);
  //           url = canvas.toDataURL("image/jpeg");
  //         });
  //       }

  // if (res && this.type !== "selfie") {
  if (res) {
    const img = new Image();
    img.src = capturedImages.value;
    img.addEventListener("load", function () {
      context.scale(-1, 1);
      context.drawImage(img, img.width, 0);
      context.setTransform(1, 0, 0, 1, 0, 0);
      url = canvas.toDataURL("image/png");
    });
  }

  if (res) {
    setTimeout(() => {
      getUrl(url);
      stopCameraStream();
    }, 1500);
  }

  async function getUrl(e) {
    capturedImage.value.push(e);
    let base64 = String(e).includes(";base64,");
    let res = String(e).includes("blob:");
    let url;

    if (base64) {
      base64 = await dataURLtoFile(e, "fotoSelfie.jpg");
      url = URL.createObjectURL(base64);
      emit("on:change", base64);
      emit("on:capture", url);
      return;
    }

    res = await dataURLtoFile(e, "fotoKtp.jpg");
    url = URL.createObjectURL(res);
    emit("on:change", base64);
    emit("on:capture", url);
  }

  function dataURLtoFile(dataurl, filename) {
    const arr = dataurl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) u8arr[n] = bstr.charCodeAt(n);
    return new File([u8arr], filename, { type: "image/jpeg" });
  }
}
// CAPTURE CAMERA END =======================================================================================
</script>
