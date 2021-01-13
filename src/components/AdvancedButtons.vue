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
      <button @click="isInv.value = !isInv.value" class="button">INV</button>
      <button @click="isRad.value = !isRad.value" class="button">RAD</button>

      <button
        v-for="button in buttons"
        :key="button"
        @click="onButtonClick(button)"
        class="button"
      >
        {{ button }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  props: {
    onButtonClick: Function,
  },
  setup() {
    const isClosed = ref(true);
    const isOpen = computed(() => !isClosed.value);
    const isInv = ref(false);
    const isRad = ref(true);

    const buttons = [
      "%",
      "sin",
      "cos",
      "tan",
      "ln",
      "log",
      "√",
      "π",
      "e",
      "^",
      "(",
      ")",
      "!",
    ];

    return {
      isClosed,
      isOpen,
      isInv,
      isRad,
      buttons,
    };
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
  @apply text-primary-text text-4xl w-1/3 h-1/5 flex justify-center items-center;
}
</style>