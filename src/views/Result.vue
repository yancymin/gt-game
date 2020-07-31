<template>
  <div class="home">
    <main>
      <img class="share-dot" src="../assets/result/share-dot.png" alt="">
      <div class="grades">
        <h1>23</h1>
      </div>
      <div class="desc">
        <img src="../assets/result/desc.svg" alt="desc">
        <h2>23</h2>
        <h2>87%</h2>
      </div>
      <div class="result">
        <img src="../assets/result/1.png" alt="result">
      </div>
      <span class="slogn"></span>
      <CommonBtn type="again" :style="{marginBottom: '8%'}"/>
      <CommonBtn type="share" />
    </main>
    <Footer />
    <DotBg :dots="dots"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import CommonBtn from '@/components/CommonBtn.vue';
import DotBg from '@/components/DotBg.vue';

export default {
  name: 'Result',
  components: {
    Footer,
    CommonBtn,
    DotBg,
  },
  data() {
    return {
      z: 0,
      x: 0,
      y: 0,
      dots: [
        [null, -54, 0, null, '44%'],
        [-20, null, null, -50, '44%'],
      ],
    };
  },
  mounted() {
    // const heroBg = document.querySelector('.hero_bg');
    // window.addEventListener('deviceorientation', (event) => {
    //   this.z = event.alpha;
    //   this.x = event.beta;
    //   this.y = event.gamma;
    //   console.log(heroBg);
    //   heroBg.style.transform = `translateY(${event.gamma}px)`;
    // }, false);
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
    padding: 10% 0 0 0;

    .share-dot {
      position: fixed;
      right: 4%;
      top: 2%;
      width: 16%;
    }

    .grades, .desc, .result {
      width: 100%;
      margin-bottom: 4%;

      img {
        width: 100%;
      }
    }

    .desc {
      position: relative;

      img {
        position: absolute;
        top: 0;
        left: 0;
      }

      h2 {
        font-family: DIN;
        font-size: 30px;
        line-height: 30px;
        color: #000000;
        text-align: center;
        margin: 2px 0;

        &:nth-of-type(2) {
          font-size: 22px;
          line-height: 22px;
          position: relative;
          right: -10px;
        }
      }

      img {
        padding: 6px 0;
      }
    }

    .grades {
      h1 {
        font-family: DIN;
        font-size: 120px;
        line-height: 120px;
        text-align: center;
        font-weight: bold;
        color: #FFFFFF;
        // text-shadow: 10px 0 0 #000, -10px 0 0 #000, 0 10px 0 #000, 0 -10px 0 #000, 5px 5px #000, -5px -5px 0 #000, 5px -5px 0 #000, -5px 5px 0 #000;
        -webkit-text-stroke: 6px #000;
      }
    }

    .desc {
      width: 70%;
    }
  }
}
</style>
