<template>
  <div class="bg-primary h-1/3 flex flex-col p-10">
    <div
      class="text-8xl text-primary-text flex-grow flex justify-end items-center overflow-hidden"
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