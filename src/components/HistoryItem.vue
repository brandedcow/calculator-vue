<template>
  <div class="flex flex-col p-10">
    <div
      id="calc-screen"
      class="text-6xl text-primary-text flex-grow flex justify-end items-center overflow-hidden transition-fontSize"
    >
      {{ input }}
    </div>
    <div class="text-6xl text-gray-500 text-right">
      {{ calculation }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    input: String,
    calculation: String,
  },
};
</script>

<style>
</style>