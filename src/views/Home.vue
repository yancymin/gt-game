<template>
  <div class="home">
    <Voice />
    <main>
      <div class="hero">
        <img src="../assets/hero-2.png" alt class="hero_bg" />
        <img src="../assets/hero-1.png" alt class="hero_text" />
        <img src="../assets/hero-3.png" alt class="hero_3" />
        <img src="../assets/hero-4.png" alt class="hero_4" />
        <img src="../assets/hero-5.png" alt class="hero_5" />
      </div>
      <span class="slogn"></span>
      <CommonBtn type="start" />
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
import Voice from '@/components/Voice.vue';

export default {
  name: 'Home',
  components: {
    Footer,
    CommonBtn,
    DotBg,
    Voice,
  },
  data() {
    return {
      z: 0,
      x: 0,
      y: 0,
      dots: [
        [null, -54, 0, null, '44%'],
        [160, null, null, -100, '44%'],
        [-100, 0, null, null, '60%'],
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

    .slogn {
      z-index: 10;
      position: relative;
      width: 90%;
      height: 20%;
      margin: 15% 0;
      background: url('../assets/home-slogn.svg') no-repeat center;
      background-size: 100%;
      display: flex;
      justify-content: center;
      opacity: 0;
      transform: translateY(-140%);
      animation: slognShow 1s ease forwards;

      @keyframes slognShow {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes lineShow {
        to {
          transform: scaleX(1);
        }
      }

      &::after {
        position: absolute;
        bottom: 54%;
        z-index: -1;
        content: '';
        display: block;
        width: 70%;
        height: 10%;
        background: white;
        transform-origin: left;
        transform: scaleX(0);
        mix-blend-mode: color;
        animation: lineShow 0.6s ease forwards 0.4s;
      }

      &::before {
        position: absolute;
        bottom: 20%;
        z-index: -1;
        content: '';
        display: block;
        width: 100%;
        height: 10%;
        background: white;
        transform-origin: left;
        transform: scaleX(0);
        mix-blend-mode: color;
        animation: lineShow 0.6s ease forwards 0.8s;
      }
    }

    .hero {
      position: relative;
      width: 100%;
      height: 40%;
      z-index: 9;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        position: absolute;
      }

      @keyframes move {
        0% {
          transform: translate3d(0, 0, 0);
        }
        40% {
          transform: translate3d(5px, 10px, 0);
        }
        50% {
          transform: translate3d(0, 0, 0);
        }
        60% {
          transform: translate3d(-3px, -8px, 0);
        }
        100% {
          transform: translate3d(0, 0, 0);
        }
      }

      @keyframes move1 {
        0% {
          transform: translate3d(0, 0, 0);
        }
        20% {
          transform: translate3d(2px, 5px, 0);
        }
        50% {
          transform: translate3d(0, 0, 0);
        }
        80% {
          transform: translate3d(-8px, -3px, 0);
        }
        100% {
          transform: translate3d(0, 0, 0);
        }
      }

      &_bg {
        width: 90%;
      }

      &_text {
        z-index: 9;
        width: 100%;
      }

      &_3 {
        bottom: -5%;
        left: 0;
        width: 20%;
        animation: move 3s linear infinite;
      }

      &_4 {
        z-index: 10;
        bottom: -22%;
        width: 40%;
        animation: move1 3s linear infinite;
      }

      &_5 {
        z-index: 8;
        top: 12%;
        right: 10%;
        width: 20%;
        animation: move 3s linear infinite;
      }
    }
  }
}
</style>
