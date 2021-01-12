<template>
  <div class="bg-primary-button h-full w-hscreen/2">
    <Screen :input="calcInput" :calculation="calcResult" />
    <Buttons :onButtonClick="handleButtonClick" />
  </div>
</template>

<script>
import { ref } from "vue";
import Screen from "./Screen";
import Buttons from "./Buttons";

export default {
  components: {
    Screen,
    Buttons,
  },
  setup() {
    // TODO window.addEventListener('keydown')

    const calcInput = ref("");
    const calcResult = ref("");

    function handleButtonClick(button) {
      calcInput.value += button;
    }

    return {
      calcInput,
      calcResult,
      handleButtonClick,
    };
  },
};
</script>

<style scoped>
</style>