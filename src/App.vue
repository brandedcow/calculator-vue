<template>
  <div class="flex flex-col">
    <History class="bg-primary-button flex-grow w-hscreen/2 z-20" />
    <Calculator class="bg-primary-button flex-grow w-hscreen/2" />
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";
import History from "./components/History.vue";
import setupThemeChanger from "./utils/themes";

export default {
  name: "App",
  components: {
    Calculator,
    History,
  },
  setup() {
    setupThemeChanger();
  },
};
</script>

<style>
#app {
  @apply w-screen h-screen bg-yellow-100 flex justify-center;
}
</style>
