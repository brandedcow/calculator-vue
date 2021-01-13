<template>
  <div class="bg-primary-button h-full w-hscreen/2">
    <Screen :input="calcInput" :calculation="calcResult" />
    <Buttons
      :onButtonClick="handleButtonClick"
      :onEqualClick="handleEqualClick"
      :onDeleteClick="handleDeleteClick"
    />
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { evaluate } from "mathjs";
import Screen from "./Screen";
import Buttons from "./Buttons";
import normalizeEpression from "../utils/transform/expressions";
import isNumber from "../utils/checks/isNumber";

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

    function handleDeleteClick() {
      calcInput.value = calcInput.value.slice(0, calcInput.value.length - 1);
      if (calcInput.value === "") {
        calcResult.value = "";
      }
    }

    function handleEqualClick() {
      calcInput.value = calcResult.value;
      calcResult.value = "";
    }

    watch(calcInput, () => {
      if (!isNumber(calcInput.value)) {
        try {
          calcResult.value = doCalculation(calcInput.value);
        } catch (e) {
          console.log(e);
          return;
        }
      }
    });

    return {
      calcInput,
      calcResult,
      handleEqualClick,
      handleButtonClick,
      handleDeleteClick,
    };
  },
};

function doCalculation(expressionString) {
  const replacedInput = normalizeEpression(expressionString);
  const calculationResult = evaluate(replacedInput).toPrecision();
  return String(calculationResult).slice(0, 10);
}
</script>

<style scoped>
</style>