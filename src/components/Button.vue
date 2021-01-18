<template>
  <div class="relative overflow-hidden">
    <button ref="button" @click="onClick()" class="relative h-full w-full">
      <slot class="z-10"></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    onClick: Function,
    label: String,
  },
  data() {
    return {
      timers: [],
    };
  },
  mounted() {
    // create ripple on mouse down, auto remove
    this.$el.addEventListener("mousedown", createRipple);

    // TODO Hold ripple when longpress + mouseup
    // Remove if mouse moves out of ele

    function createRipple(e) {
      console.log(e);
      if (e.button === 0) {
        const button = e.currentTarget;
        const diameter = button.clientHeight;
        const radius = diameter / 2;
        const ripple = document.createElement("div");
        ripple.style.height = `${diameter}px`;
        ripple.style.width = `${diameter}px`;
        ripple.style.left = `${e.offsetX - radius}px`;
        ripple.style.top = `${e.offsetY - radius}px`;

        ripple.classList.add("ripple");

        button.insertBefore(ripple, button.firstChild);

        setTimeout(() => {
          button.removeChild(button.firstChild);
        }, 400);
      }
    }
  },
};
</script>

<style>
.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  background-color: rgba(125, 125, 125, 0.2);
  animation: ripple 400ms linear 0s forwards;
}

.rippleMask {
  position: absolute;
}

@keyframes ripple {
  to {
    transform: scale(3);
    opacity: 0;
  }
}
</style>