<template>
  <div class="voice" @click="() => this.on = !this.on">
    <img v-if="on" src="../assets/voice-on.png" alt="voice-on">
    <img v-else src="../assets/voice-off.png" alt="voice-on">
    <audio
      ref="clock"
      controls="controls"
      preload="auto"
      src="/voice.mp3"
    >
    </audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      on: false,
      audio: null,
    };
  },
  mounted() {
  },
  watch: {
    on: {
      handler(newVal) {
        const audio = this.$refs.clock;
        if (newVal) {
          audio && audio.play();
        } else {
          audio && audio.pause();
          audio && (audio.currentTime = 0);
        }
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.voice {
  position: fixed;
  top: 2%;
  right: 4%;
  width: 12%;

  audio {
    position: absolute;
    width: 1px;
    height: 1px;
    border: none;
    z-index: -1;
  }

  img {
    width: 100%;
  }
}
</style>
