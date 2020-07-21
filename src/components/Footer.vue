<template>
  <footer class="footer">
    <span id="texture"></span>
    <img src="../assets/footer_1.svg" @click="link1" />
    <img src="../assets/footer_2.svg" @click="link" />
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    link1() {
      window.location.href = 'https://geetest.design';
    },
    link() {
      window.location.href = 'https://www.geetest.com';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 40px);
  position: fixed;
  bottom: 20px;

  &::before {
    z-index: -1;
    position: absolute;
    right: -20px;
    bottom: -20px;
    content: '';
    display: block;
    width: 40%;
    height: 400%;
    background: url('../assets/dots-3.svg') no-repeat top left;
    background-size: 160%;
    background-blend-mode: darken;
  }

  img {
    width: 30%;

    &:last-child {
      width: 45%;
    }
  }

  #texture {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;

    &::before {
      z-index: -1;
      position: absolute;
      right: 0;
      top: 3px;
      content: '';
      display: block;
      width: 60%;
      height: 99%;
      background: url('../assets/dots-3.svg') no-repeat top left;
      background-size: 100%;
      background-blend-mode: darken;
    }

    &::after {
      z-index: -1;
      position: absolute;
      left: -30%;
      bottom: -60%;
      content: '';
      display: block;
      width: 60%;
      height: 80%;
      background: url('../assets/dots-3.svg') no-repeat top left;
      background-size: 100%;
      background-blend-mode: darken;
    }
  }
}
</style>
