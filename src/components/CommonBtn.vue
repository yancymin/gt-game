<template>
  <router-link :to="toPath">
    <button id="start">
      <img :src="nowTextImg" />
      <!-- eslint-disable max-len -->
      <svg
        v-if="type === 'share'"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="4"
          width="92"
          height="92"
          rx="46"
          fill="black"
          stroke="black"
          stroke-width="8"
        />
        <path
          d="M66.8127 58.0484C63.0926 58.0484 60.0509 60.0398 58.6343 63.1311L40.6524 55.4823C41.7013 53.8571 42.2776 51.8658 42.2776 49.7183C42.2776 48.8284 42.1725 47.9371 41.9625 47.0982L53.4437 38.1904C54.9653 39.3429 56.9056 40.0242 59.0545 40.0242C64.2451 40.0242 68.1242 36.1466 68.1242 31.0128C68.1242 25.8776 64.2436 22 59.0545 22C53.8638 22 50.0373 25.8776 50.0373 31.0128C50.0373 32.3229 50.2999 33.5279 50.7185 34.5754L40.1272 42.6968C38.0308 39.553 34.5704 37.3516 30.6388 37.3516C29.1098 37.3477 27.5951 37.646 26.1816 38.2291C24.7682 38.8123 23.4839 39.669 22.4024 40.7499C21.321 41.8308 20.4637 43.1147 19.8798 44.5278C19.2959 45.9409 18.9969 47.4555 19 48.9845C18.9971 50.5134 19.2963 52.0278 19.8802 53.4408C20.4642 54.8538 21.3215 56.1375 22.403 57.2182C23.4844 58.299 24.7686 59.1555 26.182 59.7386C27.5953 60.3217 29.1099 60.6199 30.6388 60.616C33.0503 60.616 35.3042 59.9887 37.1395 58.8362L57.7969 67.6375C58.0595 72.5101 61.8336 76.1251 66.8127 76.1251C72.0048 76.1251 75.8314 72.249 75.8314 67.1138C75.8314 61.9786 71.9508 58.0484 66.8141 58.0484H66.8127Z"
          fill="white"
        />
      </svg>
      <svg
        v-else
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="4"
          width="92"
          height="92"
          rx="46"
          fill="black"
          stroke="black"
          stroke-width="8"
        />
        <path
          d="M56.8536 25L51.1652 31.2822L62.9222 44.3913H22V52.878H62.8219L51.165 65.8751L56.8536 72.1579L78 48.5789L56.8536 25Z"
          fill="white"
        />
      </svg>
    </button>
  </router-link>
</template>

<script>
import startText from '../assets/btn_text_start.svg';
import againText from '../assets/result/again_text.svg';
import shareText from '../assets/result/share_text.svg';

export default {
  name: 'StartBtn',
  props: ['type'],
  computed: {
    toPath() {
      switch (this.type) {
        case 'start':
          return '/game';
        case 'again':
          return '/';
        case 'share':
          return '';
        default:
          return '';
      }
    },
    nowTextImg() {
      switch (this.type) {
        case 'start':
          return startText;
        case 'again':
          return againText;
        case 'share':
          return shareText;
        default:
          return '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  z-index: 9999;
  width: 80%;
  height: 14%;
}
button {
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  min-height: 70px;
  border-radius: 800px;
  background: #ffffff;
  border: 4px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  outline: none;

  &:active {
    transform: translateX(3%) translateY(3%);
    box-shadow: 0 0 0 #000000;
  }

  img {
    width: 60%;
    margin: 0 10%;
  }

  svg {
    width: 30%;
    height: 100%;
  }
}
</style>
