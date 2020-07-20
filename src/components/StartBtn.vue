<template>
  <button id="start">
    <img src="../assets/btn_text_start.svg" />
    <!-- eslint-disable max-len -->
    <svg
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
</template>

<script>
export default {
  name: 'StartBtn',
};
</script>

<style lang="scss" scoped>
button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  border-radius: 800px;

  img {
    width: 60%;
    margin: 0 10%;
  }

  svg {
    width: 20%;
  }
}
</style>
