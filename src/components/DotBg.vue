<template>
  <div class="dot-bg">
    <img
      class="dot"
      src="../assets/dots-3.svg"
      v-for="(dot, index) in dots"
      :key="index"
      :style="{
        top: dot[0] + 'px',
        right: dot[1] + 'px',
        bottom: dot[2] + 'px',
        left: dot[3] + 'px',
        width: dot[4],
        height: dot[5],
      }"
    />
  </div>
</template>

<script>
export default {
  props: {
    dots: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.dot-bg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  .dot {
    position: absolute;
    display: block;
    background-blend-mode: darken;
  }
}
</style>
