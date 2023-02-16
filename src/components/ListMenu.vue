<template>
  <div
    class="flex flex-col text-center items-center justify-center min-h-[80vh]"
  >
    <h1 class="mb-4 font-extrabold text-2xl">Menu</h1>
    <div
      class="flex flex-col shadow-xl rounded-lg w-full min-h-[20vh] max-w-[20rem] p-8 pb-2 border-2 border-gray-300 border-opacity-25"
    >
      <ListButton :items="menus" @click="onClick" />
    </div>
  </div>
</template>

<script setup>
import ListButton from "./ListButton.vue";
import { useModeStore } from "../stores/mode";
import { ref, reactive } from "vue";

const menus = ref(["Form", "OTP Verification", "DoB Verification"]);

const store = useModeStore();

function onClick(val) {
  if (val == "Form") store.setMode("form");
  if (val == "OTP Verification") store.setMode("otp_verification");
  if (val == "DoB Verification") store.setMode("dob_verification");
}
</script>
