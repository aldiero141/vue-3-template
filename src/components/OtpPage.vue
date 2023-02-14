<template>
  <div class="flex flex-col justify-center items-center min-h-[80vh]">
    <h1 class="mb-4 font-extrabold text-2xl">OTP</h1>
    <div
      class="rounded-lg shadow-xl p-4 max-w-[20rem] border-2 border-gray-300 border-opacity-25"
      elevation="0"
    >
      <div class="text-size-14 text-weight-400 text-color-black mb-4">
        Untuk mengisi formulir pengajuan Kartu, Kode OTP yang anda terima pada
        nomor HP anda
      </div>

      <div class="flex flex-col justify-center items-center mb-6">
        <OTP :digit-count="5" @update:otp="otpValue = $event" />
      </div>

      <!-- <div v-if="alert" class="alert-error">
        <v-icon color="#DF1D4B">mdi-close-circle</v-icon>
        <p class="text-size-14 text-weight-700 text-color-red ma-0 ml-4">
          Anda telah salah memasukan kode OTP anda ({{ verify_count }}/{{
            max_verify
          }}). Anda masih memiliki {{ verify_chance }}x kesempatan input kode
          OTP
        </p>
      </div> -->

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
import OTP from "./OTP.vue";
import Button from "./Button.vue";
import { useAlertStore } from "../stores/alert";
import { ref } from "vue";

const emit = defineEmits(["click", "back"]);
const otpValue = ref("");
const store = useAlertStore();
const { setAlert } = store;

function onVerify() {
  if (otpValue.value === "12345") {
    const alert = {
      status: true,
      type: "success",
      message: `OTP Match, Verification Success `,
    };
    setAlert(alert);
  }
  if (otpValue.value !== "12345") {
    const alert = {
      status: true,
      type: "error",
      message: `OTP don't Match, Verification Failed `,
    };
    setAlert(alert);
  }
}
</script>
