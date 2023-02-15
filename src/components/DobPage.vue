<template>
  <div class="flex flex-col justify-center items-center min-h-[80vh]">
    <h1 class="mb-4 font-extrabold text-2xl">DOB Verification</h1>
    <div
      class="rounded-lg shadow-xl p-4 max-w-[20rem] border-2 border-gray-300 border-opacity-25"
      elevation="0"
    >
      <div
        class="text-size-14 text-weight-400 text-color-black mb-4 text-justify"
      >
        Untuk mengisi formulir pengajuan Kartu, Isikan tanggal lahir anda pada
        kolom kosong <span class="text-slate-200">hint: [14-04-99] </span>
      </div>

      <div class="flex flex-col justify-center items-center mb-6">
        <DobInput :masking="'0xxxx0'" @update:dob="dobValue = $event" />
      </div>

      <div class="flex flex-col justify-center items-center">
        <Button class="my-4" :text="'Verify'" @click="onVerify" />
        <Button
          class="mb-4"
          :text="'Back'"
          :type="'danger'"
          @click="$emit('back')"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
import DobInput from "./DobInput.vue";
import { useAlertStore } from "../stores/alert";
import { ref } from "vue";

const emit = defineEmits(["click", "back"]);
const dobValue = ref("");
const store = useAlertStore();
const { setAlert } = store;

function onVerify() {
  if (dobValue.value === "100009") {
    const alert = {
      status: true,
      type: "success",
      message: `DOB Match, Verification Success `,
    };
    setAlert(alert);
  }
  if (dobValue.value !== "100009") {
    const alert = {
      status: true,
      type: "error",
      message: `DOB don't Match, Verification Failed `,
    };
    setAlert(alert);
  }
}
</script>
