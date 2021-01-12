<template>
  <div class="flex flex-grow h-2/3">
    <div class="buttonContainer">
      <div class="w-3/4 h-full flex flex-wrap">
        <button
          v-for="button in buttons"
          :key="button"
          class="numericButton"
          @click="onButtonClick(button)"
        >
          {{ button }}
        </button>
        <button class="numericButton" @click="onButtonClick('=')">=</button>
      </div>
      <div class="w-1/4 h-full flex flex-wrap">
        <button class="functionButton" v-text="'<='"></button>
        <button
          v-for="fbutton in functionButtons"
          :key="fbutton"
          class="functionButton"
          @click="onButtonClick(fbutton)"
        >
          {{ fbutton }}
        </button>
      </div>
    </div>

    <button
      class="bg-secondary w-5 text-white text-3xl flex justify-center items-center px-4"
    >
      &#9001;
    </button>
  </div>
</template>

<script>
export default {
  props: {
    onButtonClick: Function,
  },
  setup() {
    const buttons = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
    const functionButtons = ["÷", "×", "-", "+"];

    return {
      buttons,
      functionButtons,
    };
  },
};
</script>

<style scoped>
.buttonContainer {
  @apply w-full h-full divide-x divide-gray-500 flex;
}

.numericButton {
  @apply text-primary-text text-4xl w-1/3 h-1/4 flex justify-center items-center;
}

.functionButton {
  @apply text-primary-text text-4xl w-full h-1/5 flex justify-center items-center;
}
</style>