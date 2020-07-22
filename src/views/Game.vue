<!-- eslint-disable max-len -->
<template>
  <div id="game">
    <header>
      <div class="progress">
        <i></i>
        <div class="progress_bar">
          <span></span>
        </div>
      </div>
      <div class="countdown">
        <p ref="successCount">0</p>
      </div>
    </header>
    <main>
      <div class="code-wrap">
        <img src="code/code-1111.png" id="code" alt="code" ref="code" />
        <img v-show="this.status" src="/game-success.svg" alt="status" class="status" ref="status" />
      </div>
      <div class="input-wrap" ref="wrap">
        <input
          v-for="(val, i) in new Array(4)"
          :key="i"
          :value="code[i] || ''"
          type="tel"
          :name="`input-${i}`"
          :id="`input-${i}`"
          maxlength="1"
          size="1"
          @input="e => inputHandle(i, e)"
        />
      </div>
    </main>
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
      testArr: ['9685', '0000', '1111'],
    };
  },
  methods: {
    inputHandle(index, e) {
      const { value, nextSibling } = e.target;
      this.code.splice(index, 1, value);
      nextSibling ? nextSibling.focus() : null;
      this.code.length === 4 ? this.resultHandle() : null;
      // console.log(this.code.join(''), document.querySelector('#code').src);
    },
    resultHandle() {
      console.log('resultHandle');
      this.code = this.code.join('');
      this.result = document.querySelector('#code').src.slice(document.querySelector('#code').src.indexOf('code-') + 5, 36);
      console.log(this.result, this.code);
      if (this.code === this.result) {
        console.log('success');
        this.successCount += 1;
        this.$refs.successCount.textContent = this.successCount;
        this.status = 1;
        this.$refs.status.src = '/game-success.svg';
        setTimeout(() => {
          this.code = [];
          this.status = 0;
          setTimeout(() => {
            this.$refs.code.src = `code/code-${this.testArr[Math.floor(Math.random() * this.testArr.length)]}.png`;
            this.$refs.wrap.children[0].focus();
          }, 200);
        }, 600);
      } else {
        console.log('error');
        this.status = 1;
        this.$refs.status.src = '/game-error.svg';
        setTimeout(() => {
          this.code = [];
          this.status = 0;
          setTimeout(() => {
            this.$refs.code.src = `code/code-${this.testArr[Math.floor(Math.random() * this.testArr.length)]}.png`;
            this.$refs.wrap.children[0].focus();
          }, 200);
        }, 600);
      }
    },
  },
  mounted() {
    this.$refs.wrap.children[0].focus();
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
        border-radius: 20px;
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
        border: 4px solid #000000;
        border-radius: 100px;
        margin-left: 4%;
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
      }
    }

    #code {
      width: 100%;
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

        &:focus {
          outline: none;
          box-shadow: none;
          transform: translateX(5%) translateY(5%);
        }
      }
    }
  }
}
</style>
