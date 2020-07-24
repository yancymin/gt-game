<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      codeSrc: [],
    };
  },
  mounted() {
    this.preload();
  },
  methods: {
    preload() {
      const context = require.context('../assets/codeImgs', false, /\d+.svg/);
      context.keys().forEach((k) => {
        const image = new Image();
        image.src = context(k);
        this.codeSrc.push(context(k));
      });
      localStorage.setItem('code', this.codeSrc);
    },
  },
};
</script>
