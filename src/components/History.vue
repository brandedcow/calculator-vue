<template>
  <div class="flex flex-col">
    <div
      class="bg-primary h-screen w-full flex flex-col justify-end divide-y overflow-y-scroll"
    >
      <div v-for="item in history" :key="item.date">
        <Screen :input="item.input" :calculation="item.result" />
      </div>
    </div>
    <div
      class="bg-primary-button h-8 flex items-center justify-center cursor-move z-10"
    >
      <div class="bg-primary-text w-10 h-2 rounded"></div>
    </div>
  </div>
</template>

<script>
import Screen from "./Screen.vue";

export default {
  data() {
    return {};
  },
  components: {
    Screen,
  },
  computed: {
    history() {
      console.log(this.$store.state.history);
      return this.$store.state.history;
    },
  },
};
</script>

<style scoped>
</style>