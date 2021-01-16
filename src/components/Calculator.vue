<template>
  <div>
    <Screen
      :input="calcInput"
      :calculation="calcResult"
      class="bg-primary h-1/3"
    />
    <Buttons
      :onButtonClick="handleButtonClick"
      :onEqualClick="handleEqualClick"
      :onDeleteClick="handleDeleteClick"
      :onDeleteLongClick="handleDeleteLongClick"
      class="h-2/3"
    />
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useStore } from "vuex";
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
    const store = useStore();
    const calcInput = ref("");
    const calcResult = ref("");

    //TODO: setupKeyboard

    function handleButtonClick(button) {
      calcInput.value += button;
    }

    function handleDeleteClick() {
      calcInput.value = calcInput.value.slice(0, calcInput.value.length - 1);
      if (calcInput.value === "") {
        calcResult.value = "";
      }
    }

    function handleDeleteLongClick() {
      calcInput.value = "";
      calcResult.value = "";
    }

    function handleEqualClick() {
      store.commit("addItem", {
        input: calcInput.value,
        result: calcResult.value,
        date: new Date(),
      });
      calcInput.value = calcResult.value;
      calcResult.value = "";
    }

    watch(calcInput, () => {
      if (!isNumber(calcInput.value)) {
        try {
          calcResult.value = doCalculation(calcInput.value);
        } catch (e) {
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
      handleDeleteLongClick,
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