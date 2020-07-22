<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    this.preload();
  },
  methods: {
    preload() {
      const imgs = [
        'code/code-9685.png',
        'code/code-0000.png',
        'code/code-1111.png',
      ];
      imgs.forEach((img) => {
        const image = new Image();
        image.src = img;
        image.onload = () => {
          this.count += 1;
        };
      });
    },
  },
};
</script>
