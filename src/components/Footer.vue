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
  width: calc(100% - 40px);
  position: fixed;
  bottom: 20px;

  img {
    width: 30%;

    &:last-child {
      width: 45%;
    }
  }
}
</style>
