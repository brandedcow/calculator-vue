<template>
  <div v-if="isOpen" class="translucentBg"></div>
  <div
    class="bg-secondary h-full z-10 flex items-center absolute right-0"
    :class="{ opened: isOpen, closed: isClosed }"
  >
    <div
      class="text-white text-5xl px-3 transition h-full flex items-center"
      v-text="isClosed ? '&#x2039;' : '&#x203A;'"
      @click="isClosed = !isClosed"
    ></div>
    <div v-show="!isClosed" class="flex flex-wrap flex-grow h-full">
      <Button @click="isInv = !isInv" class="button">INV</Button>
      <Button @click="isRad = !isRad" class="button">RAD</Button>
      <Button @click="onButtonClick('%')" class="button">%</Button>

      <Button
        v-for="ibutton in invButtons"
        :key="ibutton[0]"
        @click="onButtonClick(transformInv(ibutton[Number(isInv)]))"
        class="button"
      >
        {{ ibutton[Number(isInv)] }}
      </Button>

      <Button
        v-for="button in buttons"
        :key="button"
        @click="onButtonClick(button)"
        class="button"
      >
        {{ button }}
      </Button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import Button from "./Button";
export default {
  components: {
    Button,
  },
  props: {
    onButtonClick: Function,
  },
  setup() {
    const isClosed = ref(true);
    const isOpen = computed(() => !isClosed.value);
    const isInv = ref(false);
    const isRad = ref(true);

    const invButtons = [
      ["sin", "sin⁻¹"],
      ["cos", "cos⁻¹"],
      ["tan", "tan⁻¹"],
      ["ln", "eⁿ"],
      ["log", "10ⁿ"],
      ["√", "n²"],
    ];
    const buttons = ["π", "e", "^", "(", ")", "!"];

    return {
      isClosed,
      isOpen,
      isInv,
      isRad,
      invButtons,
      buttons,
    };
  },
  methods: {
    transformInv(char) {
      let typedChar = char;
      if (char === "eⁿ") {
        typedChar = "e^";
      }
      if (char === "10ⁿ") {
        typedChar = "10^";
      }
      if (char === "n²") {
        typedChar = "²";
      }
      return typedChar;
    },
  },
};
</script>

<style scoped>
.translucentBg {
  @apply w-full h-full bg-black opacity-50 absolute;
}
.closed {
  @apply w-9;
}
.opened {
  @apply w-3/4;
}
.button {
  @apply text-white text-4xl w-1/3 h-1/5 flex justify-center items-center;
}
</style>