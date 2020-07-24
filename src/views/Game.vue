<!-- eslint-disable max-len -->
<template>
  <div id="game">
    <header>
      <div class="progress">
        <i></i>
        <div class="progress_bar">
          <span ref="countDown" :class="{countDown:this.gameStart}"></span>
        </div>
      </div>
      <div class="countdown">
        <p ref="successCount">0</p>
      </div>
    </header>
    <main>
      <div class="code-wrap" ref="codeWrap">
        <img :src="this.imgSrc" id="code" alt="code" ref="code" :class="{error:error}" />
        <img
          v-show="this.status"
          src="/game-success.svg"
          alt="status"
          :class="{errorMotion: this.error,status}"
          ref="status"
        />
      </div>
      <div class="input-wrap" ref="wrap">
        <input
          v-for="(val, i) in new Array(this.result.length || 4)"
          :key="i"
          :value="code[i] || ''"
          type="tel"
          :name="`input-${i}`"
          :id="`input-${i}`"
          maxlength="1"
          size="1"
        />
      </div>
    </main>
    <div class="keyboard">
      <div
        v-for="(item, index) in new Array(10)"
        :key="index"
        :id="`key-${index}`"
        @click="e => getKey(index, e)"
      >
        {{
        index===9?0:1+index
        }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Game',
  data() {
    return {
      code: [],
      imgSrc: '',
      result: '',
      successCount: 0,
      status: 0,
      currentKeys: [],
      error: 0,
      gameStart: 1,
      info: null,
      codeImgSrc: [],
    };
  },
  methods: {
    codeSrcRandom() {
      this.imgSrc = this.codeImgSrc[Math.floor(Math.random() * this.codeImgSrc.length)];
      this.result = this.imgSrc.split('/img/')[1].split('.')[0];
      this.currentKeys = [];
      // this.$refs.wrap.children[0].focus(() => document.activeElement.blur());
    },
    // inputHandle(index, e) {
    //   const { nextSibling } = e.target;
    //   // this.code.splice(index, 1, value);
    //   nextSibling && nextSibling.focus(() => document.activeElement.blur());
    //   // this.code.length === 4 && this.resultHandle();
    //   // console.log(this.code.join(''), document.querySelector('#code').src);
    //   console.log(this.currentKeys, 'change');
    // },
    resultHandle() {
      this.code = this.currentKeys.join('');
      this.result = this.imgSrc.split('/img/')[1].split('.')[0];
      console.log('src:', this.imgSrc, 'code', this.code);
      if (this.code === this.result) {
        this.currentKeys = [];
        console.log('success');
        this.successCount += 1;
        this.$refs.successCount.textContent = this.successCount;
        this.status = 1;
        this.$refs.status.src = '/game-success.svg';
        setTimeout(() => {
          this.code = [];
          // this.$refs.wrap.children[0].focus(() => document.activeElement.blur());
          this.status = 0;
          setTimeout(() => {
            this.codeSrcRandom();
          }, 200);
        }, 1000);
      } else {
        this.currentKeys = [];
        console.log('error');
        this.error = 1;
        this.status = 1;
        this.$refs.status.src = '/game-error.svg';
        setTimeout(() => {
          this.code = [];
          this.status = 0;
          // this.$refs.wrap.children[0].focus(() => document.activeElement.blur());
          setTimeout(() => {
            this.codeSrcRandom();
            this.error = 0;
          }, 200);
        }, 1000);
      }
    },
    getKey(index, e) {
      // if (this.currentKeys.length >= 4) {
      //   this.currentKeys = [];
      // }
      this.currentKeys.push(index === 9 ? 0 : index + 1);
      const inputs = document.querySelectorAll('input');
      for (let i = 0; i <= this.result.length; i += 1) {
        this.currentKeys[i] ? inputs[i].value = this.currentKeys[i] : null;
      }
      console.log(e.target.textContent, index, this.currentKeys);
      if (this.currentKeys.length === this.result.length) {
        if (this.currentKeys.length === 5 || this.currentKeys.length === 4) {
          this.resultHandle();
        }
      }
      // this.currentKeys.length === 1 ? this.$refs.wrap.children[1].focus() : null;
      // this.currentKeys.length === 2 ? this.$refs.wrap.children[2].focus() : null;
      // this.currentKeys.length === 3 ? this.$refs.wrap.children[3].focus() : null;
      // this.currentKeys.length === 4 ? this.$refs.wrap.children[4].focus() : null;
      // this.currentKeys.length === 5 ? this.$refs.wrap.children[5].focus() : null;
    },
  },
  mounted() {
    const codePre = localStorage.getItem('code').split(',');
    this.codeImgSrc = codePre;
    this.codeSrcRandom();
    setTimeout(() => {
      window.location.pathname = '/Result';
    }, 30000);
  },
};
</script>

<style lang="scss" scoped>
#game {
  width: 100%;
  height: 100vh;

  header {
    width: 100%;
    height: 100px;
    padding: 20px 20px 0 20px;
    display: flex;
    justify-content: space-between;

    .progress {
      width: 70%;
      height: 100%;
      background: #ffb800;
      border: 4px solid #000000;
      box-sizing: border-box;
      box-shadow: 4px 4px 0px #000000;
      border-radius: 10px;
      display: flex;
      align-items: center;
      padding: 4%;
      overflow: hidden;

      span {
        display: inline-block;
        width: 100%;
        height: 100%;
        background: #000;
      }

      i {
        width: 30px;
        height: 40px;
        display: block;
        background: url('../assets/game-header-1.svg') no-repeat center;
        background-size: cover;
      }

      &_bar {
        width: 100%;
        height: 80%;
        box-shadow: inset 0 0 0 4px #000;
        border-radius: 100px;
        margin-left: 4%;
        overflow: hidden;
      }
    }
    .countdown {
      position: relative;
      width: 80px;
      height: 80px;
      border: 4px solid #000000;
      box-sizing: border-box;
      box-shadow: 4px 4px 0px #000000;
      border-radius: 100px;
      margin-left: 4%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: DIN;
      font-size: 40px;
      line-height: 40px;
      color: #000;
      font-weight: 700;

      &::after {
        content: '';
        display: block;
        width: 32px;
        height: 32px;
        background: url('../assets/game-header-2.svg') no-repeat center;
        background-size: cover;
        position: absolute;
        right: -13%;
        bottom: -13%;
      }
    }
  }

  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 15% 10%;

    .code-wrap {
      position: relative;
      width: 50%;

      .status {
        position: absolute;
        right: -10%;
        bottom: -12%;
        width: 30%;
        transform: scale(4);
        opacity: 0;
      }
    }

    #code {
      width: 100%;
      background: white;
      border-radius: 8px;
      border: 4px solid #000;
    }

    .input-wrap {
      width: 110%;
      margin-top: 15%;
      display: flex;
      align-items: center;

      input {
        display: flex;
        padding: 4px 0;
        width: 100%;
        height: 100%;
        margin: 2%;
        background: #ffffff;
        border: 4px solid #000000;
        box-sizing: border-box;
        box-shadow: 4px 4px 0px #000000;
        border-radius: 16px;
        font-size: 50px;
        line-height: 50px;
        text-align: center;
        font-weight: 700;
        transition: all 0.1s ease-out;
        -webkit-appearance: none;
        pointer-events: none;

        &:focus {
          outline: none;
          box-shadow: none;
          transform: translateX(5%) translateY(5%);
        }
      }
    }
  }
}

.keyboard {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 40%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 2%;
  padding: 16px;
  box-shadow: inset 0 0 0 4px #000;
  border-radius: 20px 20px 0 0;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: #ffffff;
    border: 4px solid #000000;
    border-radius: 10px;
    color: #000;
    font-weight: 700;
    font-size: 35px;

    &:active {
      background: #fbe3a2;
    }

    &:last-child {
      grid-column-end: 3;
    }
  }
}

.error {
  animation: error 0.18s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;

  @keyframes error {
    0%,
    50% {
      transform: translateX(-10%);
    }
    25%,
    75% {
      transform: translateX(10%);
    }
    100% {
      transform: translateX(0);
    }
  }
}

.errorMotion {
  animation: errorMotion 0.18s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 0.08s;

  @keyframes errorMotion {
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
}

.countDown {
  transform-origin: left;
  animation: countDown 30s linear forwards;

  @keyframes countDown {
    to {
      transform: scaleX(0);
    }
  }
}
</style>
