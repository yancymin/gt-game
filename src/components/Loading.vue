<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  mounted: function () {
    this.preload();
  },
  methods: {
    preload: function () {
      let imgs = [
        "code/code-9685.png",
        "code/code-0000.png",
        "code/code-1111.png",
      ];
      for (let img of imgs) {
        let image = new Image();
        image.src = img;
        image.onload = () => {
          this.count++;
        };
      };
    },
  },
}
</script>