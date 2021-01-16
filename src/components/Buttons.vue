<template>
  <div class="flex flex-grow relative">
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
        <button class="numericButton" @click="onEqualClick">=</button>
      </div>
      <div class="w-1/4 h-full flex flex-wrap">
        <button
          class="functionButton"
          @click="onDeleteClick"
          v-text="'<='"
          v-long-click="onDeleteLongClick"
        ></button>
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

    <AdvancedButtons :onButtonClick="onButtonClick" />
  </div>
</template>

<script>
import AdvancedButtons from "./AdvancedButtons.vue";
import longClick from "../utils/directives/longClick";

export default {
  components: {
    AdvancedButtons,
  },
  props: {
    onButtonClick: Function,
    onEqualClick: Function,
    onDeleteClick: Function,
    onDeleteLongClick: Function,
  },
  directives: {
    "long-click": longClick,
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
  @apply w-full h-full divide-x divide-gray-500 flex mr-9;
}

.numericButton {
  @apply text-primary-text text-4xl w-1/3 h-1/4 flex justify-center items-center;
}

.functionButton {
  @apply text-secondary text-4xl w-full h-1/5 flex justify-center items-center;
}
</style>