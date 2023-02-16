<template>
  <div class="flex flex-row">
    <div
      class="w-[2.8125rem] text-center"
      v-for="(word, index) in dobsLabel"
      :key="index"
    >
      {{ word }}
    </div>
  </div>
  <div ref="dobCont">
    <input
      v-model="digits[idx]"
      v-for="(el, idx) in digits"
      :key="el + idx"
      type="text"
      class="digit-box text-center"
      maxlength="1"
      :autofocus="idx === 0"
      :disabled="isDisabled(idx)"
      @keydown="handleKeyDown($event, idx)"
    />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const props = defineProps({
  default: String,
  masking: String,
});
const digits = reactive([]);
const dobsLabel = ["D", "D", "M", "M", "Y", "Y"];
const digitCount = 6;

for (let i = 0; i < digitCount; i++) {
  if (props.masking[i] == "x") {
    digits[i] = "•";
  } else {
    digits[i] = null;
  }
}

function isDisabled(index) {
  if (digits[index] == "•") return true;
  return false;
}

const dobCont = ref(null);
const emit = defineEmits(["update:dob"]);
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
    for (let i = index; 0 < i < digits.length; i--) {
      if (i == 0) return;
      if (digits[i - 1] != "•") {
        return dobCont.value.children[i - 1].focus();
      }
    }
    return;
  }

  if (new RegExp("^([0-9])$").test(event.key)) {
    digits[index] = event.key;
    for (let i = index; i < digits.length; i++) {
      if (digits[i + 1] != "•" && i + 1 < digits.length) {
        return dobCont.value.children[i + 1].focus();
      }
    }

    if (isDigitsFull()) {
      let birth = "";
      this.digits.forEach((dob, index) => {
        if (dob === "•") {
          birth += 0;
        } else {
          birth += digits[index];
        }
      });
      emit("update:dob", birth);
    }
  }
}
</script>

<style scoped>
.digit-box {
  height: 2.625em;
  width: 2.625em;
  border: 1px solid black;
  display: inline-block;
  border-radius: 5px;
  margin: 5px;
  padding: 0.6825rem;
  font-size: 0.825rem;
}
.digit-box:focus {
  outline: 2px solid #60a6fa;
}
</style>
