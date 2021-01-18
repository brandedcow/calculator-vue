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
    // toggle active class on button
    this.$el.addEventListener("mousedown", addActive);
    this.$el.addEventListener("mouseup", removeActive);
    this.$el.addEventListener("mouseleave", removeActive);

    // create ripple on mouse down, auto remove
    this.$el.addEventListener("mousedown", createRipple);

    // Hold ripple when longpress + mouseup, use active class to track
    // Remove if mouse moves out of ele
    this.$el.addEventListener("mouseup", removeRipple);
    this.$el.addEventListener("mouseleave", removeRipple);

    function addActive(e) {
      e.currentTarget.classList.add("active");
    }
    function removeActive(e) {
      e.currentTarget.classList.remove("active");
    }

    function createRipple(e) {
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
        ripple.classList.add("animationActive");

        button.insertBefore(ripple, button.firstChild);

        // remove ripple slightly after animation fininshes normally,
        setTimeout(() => {
          // remove animationActive
          ripple.classList.remove("animationActive");

          // dont remove if button is still active
          if (button.classList.contains("active")) return;

          if (button.firstChild.classList.contains("ripple")) {
            button.removeChild(button.firstChild);
          }
        }, 450);
      }
    }

    function removeRipple(e) {
      const button = e.currentTarget;
      if (
        button.firstChild.classList.contains("ripple") &&
        !button.firstChild.classList.contains("animationActive")
      ) {
        button.removeChild(button.firstChild);
      }
      e;
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
  }
}
</style>