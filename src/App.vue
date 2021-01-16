<template>
  <div class="flex flex-col">
    <History
      class="h-full w-hscreen/2 z-20 absolute -top-full-6"
      v-drag-down="['calc(-100vh + 2rem)', '0']"
    />
    <Calculator class="bg-primary-button flex-grow w-hscreen/2" />
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";
import History from "./components/History.vue";
import setupThemeChanger from "./utils/themes";
import handleDragDown from "./use/dragDown";

export default {
  name: "App",
  components: {
    Calculator,
    History,
  },
  setup() {
    setupThemeChanger();
  },
  directives: {
    "drag-down": handleDragDown,
  },
};
</script>

<style>
#app {
  @apply w-screen h-screen bg-yellow-100 flex justify-center;
}
</style>
