<template>
  <div ref="otpCont">
    <input
      v-model="digits[idx]"
      v-for="(el, idx) in digits"
      type="text"
      class="digit-box text-center"
      maxlength="1"
      :key="el + idx"
      :autofocus="idx === 0"
      @keydown="handleKeyDown($event, idx)"
    />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const props = defineProps({
  default: String,
  digitCount: {
    type: Number,
    required: true,
  },
});
const digits = reactive([]);
if (props.default && props.default.length === props.digitCount) {
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = props.default.charAt(i);
  }
} else {
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = null;
  }
}
const otpCont = ref(null);
const emit = defineEmits(["update:otp"]);
const isDigitsFull = function () {
  for (const elem of digits) {
    if (elem == null || elem == undefined) {
      return false;
    }
  }
  return true;
};
function handleKeyDown(event, index) {
  if (
    event.key !== "Tab" &&
    event.key !== "ArrowRight" &&
    event.key !== "ArrowLeft"
  ) {
    event.preventDefault();
  }

  if (event.key === "Backspace") {
    digits[index] = null;

    if (index != 0) {
      otpCont.value.children[index - 1].focus();
    }
    return;
  }

  if (new RegExp("^([0-9])$").test(event.key)) {
    digits[index] = event.key;
    if (index != props.digitCount - 1) {
      otpCont.value.children[index + 1].focus();
    }
    if (isDigitsFull()) {
      emit("update:otp", digits.join(""));
    }
  }
}
</script>

<style scoped>
.digit-box {
  height: 2.75em;
  width: 2.75em;
  border: 1px solid black;
  display: inline-block;
  border-radius: 5px;
  margin: 5px;
  padding: 1rem;
  font-size: 1rem;
}
.digit-box:focus {
  outline: 2px solid #60a6fa;
}
</style>
