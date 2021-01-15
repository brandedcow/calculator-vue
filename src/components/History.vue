<template>
  <div class="absolute">{{ history }}</div>
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