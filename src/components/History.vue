<template>
  <div class="flex flex-col">
    <div
      class="bg-primary h-screen w-full flex flex-col justify-end divide-y overflow-y-scroll"
    >
      <div v-for="(list, key) in history" :key="key">
        <div class="text-secondary pt-3 pl-6">
          {{ key }}
        </div>
        <div v-for="item in list" :key="item.date">
          <HistoryItem :input="item.input" :calculation="item.result" />
        </div>
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
import HistoryItem from "./HistoryItem.vue";
import { format } from "date-fns";

export default {
  components: {
    HistoryItem,
  },
  computed: {
    history() {
      const orderedByDate = this.$store.state.history.reduce((acc, curr) => {
        const currDate = format(curr.date, "MMMM d, y");
        if (!acc[currDate]) {
          acc[currDate] = [curr];
        } else {
          acc[currDate].push(curr);
        }
        return acc;
      }, {});

      return orderedByDate;
    },
  },
};
</script>

<style scoped>
</style>