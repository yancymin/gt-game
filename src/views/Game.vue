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
        <p>0</p>
      </div>
    </header>
    <main>
      <img src="../assets/code-9685.png" class="code" />
      <div class="input-wrap">
        <input
          type="text"
          name="input-1"
          id="input-1"
          oninput="if(value.length>1)value=value.slice(0,1)"
        />
        <input
          type="text"
          name="input-2"
          id="input-2"
          oninput="if(value.length>1)value=value.slice(0,1)"
        />
        <input
          type="text"
          name="input-3"
          id="input-3"
          oninput="if(value.length>1)value=value.slice(0,1)"
        />
        <input
          type="text"
          name="input-4"
          id="input-4"
          oninput="if(value.length>1)value=value.slice(0,1)"
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
    }
  },
  mounted() {
    const inputs = document.querySelectorAll('input');
    let code = [];
    inputs[0].focus();
    inputs.forEach(item => {
      item.addEventListener('input', () => {
        {
          if (item.value) {
            if (item.value.length == 1) {
              if (code.length <= inputs.length - 1) {
                code.push(item.value);
              }
              console.log(code);
              if (item.nextSibling) {
                item.nextSibling.focus();
              }
            }
          }
        }
      })
    })
  }
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

    .code {
      width: 50%;
    }

    .input-wrap {
      width: 110%;
      margin-top: 15%;
      display: flex;
      align-items: center;

      input {
        display: inline-block;
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
