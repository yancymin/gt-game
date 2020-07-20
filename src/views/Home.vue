<template>
  <div class="home">
    <main>
      <StartBtn />
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import StartBtn from '@/components/StartBtn.vue';

export default {
  name: 'Home',
  components: {
    Footer, StartBtn,
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 20px;

  main {
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
