<template>
  <div v-if="isOpen" class="translucentBg"></div>
  <div
    class="bg-secondary h-full z-10 flex items-center absolute right-0"
    :class="{ opened: isOpen, closed: isClosed }"
    @click="isClosed = !isClosed"
  >
    <div
      class="text-white text-5xl px-3 transition"
      v-text="isClosed ? '&#x2039;' : '&#x203A;'"
    ></div>
    <div v-if="!isClosed" class="flex-grow h-full">
      <div></div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const isClosed = ref(true);
    const isOpen = computed(() => !isClosed.value);
    const isInv = ref(false);

    return {
      isClosed,
      isOpen,
      isInv,
    };
  },
};
</script>

<style scoped>
.translucentBg {
  @apply w-full h-full bg-black opacity-50 absolute;
}
.closed {
  @apply w-9;
}
.opened {
  @apply w-3/4;
}
</style>