<template>
  <main>
    <template v-if="mode === 'menu'">
      <ListMenu />
    </template>
    <template v-if="mode === 'form'">
      <Form @back="onMenu" />
    </template>
    <template v-if="mode === 'otp_verification'">
      <OtpPage @back="onMenu" />
    </template>
    <template v-if="mode === 'dob_verification'">
      <DobPage @back="onMenu" />
    </template>
    <template v-if="mode === 'camera_capture'">
      <CameraPage />
    </template>
  </main>
</template>

<script setup>
import Form from "../components/Form.vue";
import ListMenu from "../components/ListMenu.vue";
import OtpPage from "../components/OtpPage.vue";
import DobPage from "../components/DobPage.vue";
import CameraPage from "../components/Camera/CameraPage.vue";

import { storeToRefs } from "pinia";
import { useModeStore } from "../stores/mode";
import { useViewStore } from "../stores/view";

const store = useModeStore();
const { mode } = storeToRefs(store);
store.setMode("menu");

const storeView = useViewStore();
const pathArray = window.location.pathname.split("/");
const path = pathArray[1];
storeView.setView(path);

function onMenu() {
  store.setMode("menu");
}
</script>
