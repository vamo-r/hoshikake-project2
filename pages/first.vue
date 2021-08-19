<template>
  <div class="wrapper">
    <Header/>
    <main>
      <section class="fv">
        <div class="fv_title">
          <h2>
            <img src="~/assets/images/fv_first.svg" alt="参加方法">
          </h2>
        </div>
      </section>
      <section class="sentence">
        <div class="container">
          <p>
            参加方法や会場に関するご質問など、お問い合わせの多い内容を掲載しております。<br>
            該当するご質問内容を選択し、ご確認ください。
          </p>
        </div>
      </section>
      <section class="qa">
        <div class="container">
          <h2>クルージングについて</h2>
          <ul>
            <li>
              <button :class="style" @click="toggle(1)">
                <p>Q　クルージングは必須なのでしょうか？</p>
                <span class="btn-icon"></span>
              </button>
              <div class="answer" v-show="show.indexOf(1) >= 0">
                <p>A　必須では有りません</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
    <Footer/>
    <ScrollTopButton/>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '初めての方へ'
    }
  },
  data() {
    return {
      style: null,
      show: []
    }
  },
  methods: {
    toggle(data) {
      if (this.show.indexOf(data) >= 0) {
        this.show = this.show.filter(n => n !== data)
        this.style = null
      } else {
        this.show.push(data)
        this.style = 'isActive'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  padding: 0 0 50px;
  background: #ebebeb;
  .fv {
    overflow: hidden;
    position: relative;
    width: 100vw;
    height: 70vh;
    background: url('~/assets/images/bg_first.png') no-repeat border-box;
    background-position: center top;
    .fv_title {
      @include absolute(50%, 50%, null, null);
      transform: translate(-50%, -50%);
      padding: 20px 35px;
      border: 1px solid #fff;
      @include mq() { // SP用関数
        padding: 10px;
      }
      h2 {
        width: 100%;
        background: #fff;
        text-align: center;
        font-size: 7rem;
        font-weight: bold;
        @include mq(md) { // TAB用関数
          font-size: 6rem;
        }
        @include mq() { // SP用関数
          font-size: 2rem;
        }
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  .sentence {
    .container {
      p {
        padding: 85px 0;
        text-align: center;
        font-size: 2.6rem;
        color: #707070;
        @include mq(md) { // TAB/SP用関数
          padding: 40px 0;
          font-size: 1.6rem;
          line-height: 25px;
        }
      }
    }
  }
  .qa {
    .container {
      h2 {
        margin: 100px 0 0;
        font-size: 4rem;
        font-weight: bold;
        @include mq(md) { // TAB/SP用関数
          margin: 20px 0;
          font-size: 2.5rem;
        }
      }
      ul {
        li {
          margin: 30px 0;
          @include mq(md) { // TAB/SP用関数
            margin: 15px 0;
          }
          button {
            @include flex(space-between, center);
            width: 100%;
            padding: 20px;
            background: #fff;
            p {
              font-size: 3rem;
              font-weight: bold;
              @include mq(md) { // TAB/SP用関数
                font-size: 1.6rem;
              }
            }
            .btn-icon {
              position: relative;
              width: 3rem;
              height: 0.2rem;
              background: currentColor;
              transition: all .3s;
              @include mq(md) { // TAB/SP用関数
                width: 2rem;
              }
              &::before {
                content: '';
                @include absolute(0, 0, null, null);
                width: 100%;
                height: 100%;
                background: inherit;
                border-radius: inherit;
                transform: rotate(90deg);
                transition: all .3s;
              }
            }
          }
          .isActive {
            .btn-icon {
              background: #ed20ae;
              transform: rotate(225deg);
              transition: all .3s;
              &::before {
                background: #ed20ae;
                transition: all .3s;
              }
            }
          }
          .answer {
            @include flex(space-between, center);
            width: 100%;
            padding: 20px;
            background: #fff;
            font-size: 3rem;
            font-weight: bold;
            @include mq(md) { // TAB/SP用関数
              font-size: 1.6rem;
            }
          }
        }
      }
    }
  }
}
</style>