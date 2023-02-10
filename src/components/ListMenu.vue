<template>
  <div
    class="flex flex-col text-center items-center justify-center min-h-[80vh]"
  >
    <h1 class="mb-4 font-extrabold text-2xl">List Menu</h1>
    <div
      class="flex flex-col justify-center shadow-xl rounded-lg w-full min-h-[40vh] max-w-[20rem] p-4 border-2 border-gray-300 border-opacity-25"
    >
      <ListButton :items="menus" @click="setMode" />
    </div>
  </div>
</template>

<script setup>
import ListButton from "./ListButton.vue";
import { useModeStore } from "../stores/mode";
import { ref, reactive } from "vue";

const menus = ref(["form", "OTP", "DOB"]);

const store = useModeStore();
const { setMode } = store;
</script>
