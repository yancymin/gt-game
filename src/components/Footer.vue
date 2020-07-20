<template>
  <footer class="footer">
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
  width: 100%;
  position: fixed;
  bottom: 20px;
  padding: 0 20px;

  &::before {
    z-index: -1;
    position: absolute;
    right: 0;
    bottom: -20px;
    content: '';
    display: block;
    width: 35%;
    height: 280%;
    background: url('../assets/dots-3.png') no-repeat center;
    background-size: cover;
    background-blend-mode: darken;
  }

  img {
    width: 40%;
  }
}
</style>
