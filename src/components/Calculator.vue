<template>
  <div class="bg-primary-button h-full w-hscreen/2">
    <div class="bg-primary h-1/3 flex flex-col p-10">
      <div
        class="text-8xl text-primary-text flex-grow flex justify-end items-center"
      >
        1+2
      </div>
      <div class="text-6xl text-gray-500 text-right">3</div>
    </div>
    <div class="flex flex-grow h-2/3">
      <div class="w-full h-full divide-x divide-gray-500 flex">
        <div class="w-3/4 h-full flex flex-wrap">
          <div
            v-for="button in buttons"
            :key="button"
            class="text-primary-text text-4xl w-1/3 h-1/4 flex justify-center items-center"
          >
            {{ button }}
          </div>
        </div>
        <div class="w-1/4 h-full flex flex-wrap">
          <div
            class="text-primary-text text-4xl w-full h-1/5 flex justify-center items-center"
            v-text="'<='"
          ></div>
          <div
            v-for="fbutton in functionButtons"
            :key="fbutton"
            class="text-primary-text text-4xl w-full h-1/5 flex justify-center items-center"
          >
            {{ fbutton }}
          </div>
        </div>
      </div>

      <div
        class="bg-secondary w-5 text-white text-3xl flex justify-center items-center px-4"
      >
        &#9001;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const buttons = [
      "7",
      "8",
      "9",
      "4",
      "5",
      "6",
      "1",
      "2",
      "3",
      "0",
      ".",
      "=",
    ];
    const functionButtons = ["÷", "×", "-", "+"];

    return {
      buttons,
      functionButtons,
    };
  },
};
</script>

<style scoped>
</style>