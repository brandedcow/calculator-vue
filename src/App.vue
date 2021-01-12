<template>
  <Calculator />
</template>

<script>
import Calculator from "./components/Calculator.vue";
import setupThemeChanger from "./utils/themes";

export default {
  name: "App",
  components: {
    Calculator,
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
