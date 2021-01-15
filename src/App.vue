<template>
  <div class="flex flex-col">
    <History
      class="bg-primary h-full+1.5rem w-hscreen/2 z-20 absolute -top-full"
      v-drag-down
    />
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
  directives: {
    "drag-down": handleDragDown,
  },
};

function handleDragDown(el) {
  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultDragOver() {
    document.addEventListener("dragover", preventDefault);
  }

  function handleDrag(e) {
    const { pageY: y } = e;
    const windowHeight = e.view.innerHeight;

    if (y < windowHeight) {
      el.style.top = `calc(-100% + ${y}px)`;
    }

    // if dragged past 2/3 of screen, go to endState
  }

  function endDrag(e) {
    const { pageY: y } = e;
    const windowHeight = e.view.innerHeight;
    const threshold = windowHeight / 2;

    if (y > threshold) {
      el.style.top = `calc(-100% + ${windowHeight}px - 1.5rem)`;
    } else {
      el.style.top = "-100%";
    }

    document.removeEventListener("dragover", preventDefault);
  }

  el.addEventListener("dragstart", preventDefaultDragOver);
  el.addEventListener("drag", handleDrag);
  el.addEventListener("dragend", endDrag);
}
</script>

<style>
#app {
  @apply w-screen h-screen bg-yellow-100 flex justify-center;
}
</style>
