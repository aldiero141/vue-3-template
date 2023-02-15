<template>
  <div class="input d-flex flex-row justify-center mb-6">
    <div v-for="(d, index) in dobs" :key="index">
      <div v-if="d === 'x'" class="text-center">
        <div class="font-weight-bold text-color-bsi text-size-14">
          {{ dobsLabel[index] }}
        </div>
        <input
          ref="dobInput"
          v-model="formDob[`params${index + 1}`]"
          type="tel"
          class="mt-2 dob-input--mobile dob-input-fillable--mobile font-weight-bold text-color-black"
          :style="{
            'caret-color': '#00A39D',
            'border-color': '#00A39D',
            'font-size': '0.875rem',
            'font-weight': '700',
          }"
          maxlength="1"
          autocomplete="off"
        />
      </div>
      <div v-else class="text-center">
        <div class="font-weight-bold text-color-bsi text-size-14">
          {{ dobsLabel[index] }}
        </div>
        <input
          ref="dobInput"
          value="•"
          class="mt-2 dob-input--mobile dob-input-disable--mobile font-weight-bold"
          :style="{
            color: '#16191D',
          }"
          maxlength="1"
          disabled
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from "vue";

const dobsLabel = ref(["D", "D", "M", "M", "Y", "Y"]);
const dobs = ref([]);
const fillParams = ref(["x", "x", "x", "x", "x", "x"]);
const alert = ref(true);
const dob = reactive({
  digit1: "",
  digit2: "",
  digit3: "",
  digit4: "",
  digit5: "",
  digit6: "",
});
const formDob = reactive({
  digit1: "",
  digit2: "",
  digit3: "",
  digit4: "",
  digit5: "",
  digit6: "",
});

const dobInput = computed(() => {
  return {
    ref: this.$refs,
    dob: this.dobs,
    form: this.formDob,
  };
});

watch(
  dobInput,
  ({ ref, dob, form }) => {
    this.$nextTick(() => {
      if ((ref?.dobInput || []).length) {
        let indexX = [];
        dob.forEach((data, index) => {
          if (data === "x") {
            indexX.push(index);
          }
        });
        if (
          form[`params${indexX[1] + 1}`] === "" ||
          form[`params${indexX[1] + 1}`] === null ||
          form[`params${indexX[1] + 1}`] === undefined
        ) {
          if (form[`params${indexX[0] + 1}`]) {
            ref.dobInput[indexX[1]].focus();
          }
        }
      }
    });
  },
  { deep: true }
);

watch(ref, () => {
  initDobMask();
});

watch(dobs, () => {
  if (isDobsFull()) {
    joinDobs();
  }
});

function initDobMask() {
  let dob_mask = "11xx11";
  if (dob_mask) {
    const dobs = dob_mask.split("");

    const fillParams = [];
    const form = {};
    dobs.forEach((dob, index) => {
      if (dob === "x") {
        form[`params${index + 1}`] = "";
        fillParams.push(`params${index + 1}`);
      }
    });
    this.dobs = dobs;
    this.fillParams = fillParams;
  }
}

function isDobsFull() {
  for (const elem of dobs) {
    if (elem == null || elem == undefined) {
      return false;
    }
  }
  return true;
}

function joinDobs() {
  let birth = "";

  this.dobs.forEach((dob, index) => {
    if (dob !== "x") {
      birth += 0;
    } else {
      birth += this.formDob[`params${index + 1}`];
    }
  });

  emit("update:dob", birth);
}
</script>
