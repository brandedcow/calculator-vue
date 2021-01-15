<template>
  <div class="flex flex-col">
    <div class="h-screen w-full"></div>
    <div
      class="bg-primary-button flex-grow flex items-center justify-center cursor-move"
    >
      <div class="bg-primary-text w-10 h-2 rounded"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    history() {
      console.log(this.$store.state.history);
      return this.$store.state.history;
    },
  },
};
</script>

<style>
</style>