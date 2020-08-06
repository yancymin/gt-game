<template>
  <div class="home">
    <main>
      <img class="share-dot" src="../assets/result/share-dot.png" alt />
      <div class="grades">
        <h1>23</h1>
      </div>
      <div class="desc">
        <div class="desc-1">
          <h2>23</h2>
          <img src="../assets/result/desc-1.svg" alt="desc" />
        </div>
        <div class="desc-2">
          <h2>87%</h2>
          <img src="../assets/result/desc-2.svg" alt="desc" />
        </div>
      </div>
      <div class="result">
        <img :src="this.resultRandom()" alt="result" />
      </div>
      <span class="slogn"></span>
      <CommonBtn type="again" :style="{marginBottom: '8%'}" />
      <CommonBtn type="share" @click.native="share" />
    </main>
    <Footer />
    <DotBg :dots="dots" />
    <div class="share-screen" v-show="this.shareActive" @click="share">
      <img src="../assets/result/share-arrow.svg" alt />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import CommonBtn from '@/components/CommonBtn.vue';
import DotBg from '@/components/DotBg.vue';
import result1 from '../assets/result/1.png';
import result2 from '../assets/result/2.png';
import result3 from '../assets/result/3.png';
import result4 from '../assets/result/4.png';
import result5 from '../assets/result/5.png';
import result6 from '../assets/result/6.png';
import result7 from '../assets/result/7.png';
import result8 from '../assets/result/8.png';
import result9 from '../assets/result/9.png';

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
      shareActive: false,
      result: [result1, result2, result3, result4, result5, result6, result7, result8, result9],
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
  methods: {
    share() {
      this.shareActive = !this.shareActive;
    },
    resultRandom() {
      const randomNum = Math.floor(Math.random() * this.result.length);
      return this.result[randomNum];
    },
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

    .grades,
    .desc,
    .result {
      width: 100%;
      margin-bottom: 4%;

      img {
        width: 100%;
      }
    }

    .desc {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;

      .desc-1, .desc-2 {
        position: relative;
        /* height: 4%; */
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .desc-1 {
        width: 80vw;
      }

      .desc-2 {
        h2 {
          font-size: 24px;
          line-height: 24px;
          margin-left: 20px;
        }
      }

      h2 {
        position: absolute;
        font-family: DIN;
        font-size: 30px;
        line-height: 30px;
        color: #000000;
        text-align: center;
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
        color: #ffffff;
        // text-shadow: 10px 0 0 #000, -10px 0 0 #000, 0 10px 0 #000, 0 -10px 0 #000, 5px 5px #000, -5px -5px 0 #000, 5px -5px 0 #000, -5px 5px 0 #000;
        -webkit-text-stroke: 6px #000;
      }
    }

    .desc {
      width: 70%
    }
  }
}

.share-screen {
  z-index: 99999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);

  img {
    position: absolute;
    right: 0;
    top: 0;
    width: 120px;
  }
}
</style>
