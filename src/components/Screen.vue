<template>
  <div class="bg-primary h-1/3 flex flex-col p-10">
    <div
      id="calc-screen"
      class="text-8xl text-primary-text flex-grow flex justify-end items-center overflow-hidden transition-fontSize"
    >
      {{ input }}
    </div>
    <div class="text-6xl text-gray-500 text-right">
      {{ calculation }}
    </div>
  </div>
</template>

<script>
import { watch } from "vue";

export default {
  props: {
    input: String,
    calculation: String,
  },
  setup(props) {
    watch(
      () => props.input,
      (newInput) => {
        const screenEle = document.getElementById("calc-screen");
        screenEle.style.fontSize = dynamicFontSize(newInput.length);
      }
    );
  },
};

function dynamicFontSize(length) {
  let fontSize = "9vh";

  if (length >= 8) {
    fontSize = "7vh";
  }

  if (length >= 11) {
    fontSize = "5vh";
  }

  return fontSize;
}
</script>

<style>
</style>