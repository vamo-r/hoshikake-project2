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
              <button :class="[show[1] ? 'isActive' : '']" @click="toggle(1)">
                <p>Q　クルージングは必須なのでしょうか？</p>
                <span class="btn-icon"></span>
              </button>
              <div class="answer" v-show="show[1]">
                <p>A</p>
                <p>必須では有りません。本島の近くの港や島の港からもご覧いただくことは可能です。</p>
              </div>
            </li>

            <li>
              <button :class="[show[2] ? 'isActive' : '']" @click="toggle(2)">
                <p>Q　どこから見るのがベストなのか？</p>
                <span class="btn-icon"></span>
              </button>
              <div class="answer" v-show="show[2]">
                <p>A</p>
                <p>基本的にはご自由に、ということですが、FPLの見解では、打ち上げ地点から500メートルくらい離れたあたりがもっとも形良く見える、としています。近すぎず遠すぎずといったところですね。だいたい4～500メートルがお薦めの「間合い」でしょうか。近すぎても見上げるに疲れますし、遠すぎれば臨場感やほどほどの迫力に欠けてしまいます。もっとも、火の粉を浴びるほど近くで観なけりゃ観た気がしねェ、という粋なお方はできる限りお近くでどうぞ。また文字やナイアガラなどの仕掛け花火は近いほどいいでしょう。ただしこうした仕掛けものは大量の煙を伴うので、風向きが悪ければしばらくは煙にまかれてしまいます。</p>
              </div>
            </li>

            <li>
              <button :class="[show[3] ? 'isActive' : '']" @click="toggle(3)">
                <p>Q　何を持って行けばいいですか？</p>
                <span class="btn-icon"></span>
              </button>
              <div class="answer" v-show="show[3]">
                <p>A</p>
                <p>家族連れ、仲間どうし、友達どうしなどでは携帯/スマートフォンは有力な連絡アイテム。待ち合わせやはぐれたときの連絡、シートの場所がわからなくなったなど直接連絡がとれる携帯電話は、大変な混雑になる花火大会では必携品になります。打ち上げ現場や花火大会スタッフの間でも携帯やトランシーバーは本部と打ち上げ場所との連絡などに欠かせないものになっています。</p>
              </div>
            </li>

            <li>
              <button :class="[show[4] ? 'isActive' : '']" @click="toggle(4)">
                <p>Q　大会の規模は？</p>
                <span class="btn-icon"></span>
              </button>
              <div class="answer" v-show="show[4]">
                <p>A</p>
                <p>
                  打上発数は約２万発です。（昨年度実績約20,000発）<br>
                  2尺玉打上予定。例年の人出は、8万人前後です。 (クルージングへの参加者は4万名ほど)<br>
                  （ちなみに昨年大会実行委員会発表は7.5万人、一昨年は9万人）
                </p>
              </div>
            </li>

            <li>
              <button :class="[show[5] ? 'isActive' : '']" @click="toggle(5)">
                <p>Q　実施及び順延の決定は？</p>
                <span class="btn-icon"></span>
              </button>
              <div class="answer" v-show="show[5]">
                <p>A</p>
                <p>当日朝、判定委員会にて決定します。順延の場合は、午前7時30分ごろから、15時までには本ホームページ、テレビ、ラジオ等でお知らせします。 </p>
              </div>
            </li>

            <li>
              <button :class="[show[6] ? 'isActive' : '']" @click="toggle(6)">
                <p>Q　駐車場は？</p>
                <span class="btn-icon"></span>
              </button>
              <div class="answer" v-show="show[6]">
                <p>A</p>
                <p>
                  会場周辺に、約20箇所 約4,800台です。最大の駐車場である星駆駐車場をおすすめします。<br>
                  ※一部駐車場は、道路等の交通規制により、満車前でもご利用できなくなります。<br>
                  ※例年、駐車場は満車となります。<br>
                  ※会場周辺は、17:00頃から非常に混雑します。なるべく、電車など公共交通機関でのご来場をお勧めします。
                </p>
              </div>
            </li>

            <li>
              <button :class="[show[7] ? 'isActive' : '']" @click="toggle(7)">
                <p>Q　交通規制は何時からですか？</p>
                <span class="btn-icon"></span>
              </button>
              <div class="answer" v-show="show[7]">
                <p>A</p>
                <p>
                  17:00～22:00です。交通状況により延長される場合もあります。<br>
                  ※ 会場周辺は、17:00頃から非常に混雑します。なるべく、電車など公共交通機関でのご来場をお勧めします。
                </p>
              </div>
            </li>

            <li>
              <button :class="[show[8] ? 'isActive' : '']" @click="toggle(8)">
                <p>Q　トイレは何箇所、ありますか？</p>
                <span class="btn-icon"></span>
              </button>
              <div class="answer" v-show="show[8]">
                <p>A</p>
                <p>常設トイレ、仮設トイレ含め約10箇所、約150台です。身障者用トイレは、有料席とグラウンドに1箇所ずつあります。</p>
              </div>
            </li>

            <li>
              <button :class="[show[9] ? 'isActive' : '']" @click="toggle(9)">
                <p>Q　屋台はどこに出ますか？</p>
                <span class="btn-icon"></span>
              </button>
              <div class="answer" v-show="show[9]">
                <p>A</p>
                <p>島の港周辺や、本島の港周辺に約80店出る予定です。</p>
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
      show: {}
    }
  },
  methods: {
    toggle(key) {
      this.$set(this.show, key, !this.show[key]);
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
    background: url('~/assets/images/first.png') no-repeat border-box;
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
            @include flex(flex-start, flex-start);
            width: 100%;
            padding: 20px;
            background: #fff;
            font-size: 3rem;
            font-weight: bold;
            @include mq(md) { // TAB/SP用関数
              font-size: 1.6rem;
            }
            p {
              line-height: 40px;
              & + p {
                margin: 0 0 0 30px;
                @include mq(md) { // TAB/SP用関数
                  margin: 0 0 0 20px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>