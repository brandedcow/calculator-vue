<template>
  <div>
    <button ref="button" @click="onClick" class="relative h-full w-full">
      <div ref="ripple" class="ripple"></div>
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    onClick: Function,
    label: String,
  },
  mounted() {
    const ripple = this.$refs.ripple;
    const button = this.$refs.button;

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${button.clientWidth / 2}px`;
    ripple.style.top = `${button.clientHeight / 2}px`;

    this.$refs.button.addEventListener("click", function createRipple(e) {
      ripple.style.left = `${e.offsetX - radius}px`;
      ripple.style.top = `${e.offsetY - radius}px`;
      ripple.classList.add("animate_ripple");
      setTimeout(() => {
        ripple.classList.remove("animate_ripple");
      }, 600);
    });
  },
};
</script>

<style scoped>
.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  background-color: rgba(255, 255, 255, 0.7);
}

.animate_ripple {
  animation: ripple 600ms linear 0s forwards;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>