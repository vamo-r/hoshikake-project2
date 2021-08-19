<template>
  <div class="wrapper">
    <Header/>
    <main>
      <section class="fv">
        <div class="container">
          <div class="fv_title">
            <h2>
              <img src="~/assets/images/fv_enjoy.svg" alt="楽しみ方">
            </h2>
          </div>
          <div class="fv_text">
            <p>
              日時　<span>8</span>月<span>29</span>日（日）<br>
              19:00〜21:00
            </p>
          </div>
        </div>
      </section>
      <section class="fireworks">
        <div class="container">
          <div class="fireworks_title">
            <h3 class="year">2021</h3>
            <h3 class="name">HOSHIKAKE<br>FIREWORKS</h3>
          </div>
          <div class="fireworks_text">
            <p>
              2020年国内最大級の規模で開催した星駆花火大会から1年。<br>
              今年は昨年同様の大規模な花火エンターテイメントショーに加えて、<br>
              全国23社が腕を競い合う競技部門も追加され『星駆花火競技大会2021』として、<br>
              昨年をはるかに超える規模で開催します。<br>
              日本全国から集まった23社の花火会社の審査を左右するのは、<br>
              会場やオンラインで観覧している皆さんです。
            </p>
          </div>
          <div class="fireworks_link">
            <NuxtLink to="/join">参加方法はこちら</NuxtLink>
          </div>
        </div>
      </section>
      <section class="program">
        <div class="program_wrapper">
          <div class="container">
            <h3>特別プログラム</h3>
            <Program :items="items"/>
          </div>
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
      title: '楽しみ方'
    }
  },
  data() {
    return {
      items: [
        {
          id: 1,
          image: require('~/assets/images/enjoy_eyecatch1.png'),
          title: '国内最大級2万発の海上花火',
          sentence: '今回の目玉は全国23社の花火会社による競技です。若手が輝き、挑戦する場を目指す星駆大会にふさわしく、花火業界の次世代を牽引する注目の花火師が揃いました。また2020年国内最大級とも言われた豪華なミュージックスターマインは今年も健在。都心ではあまり見ることの出来ない尺玉も100発以上打ち上がり、昨年90分間だったプログラムも今年は120分間となり大きくスケールアップしました。',
        },
        {
          id: 2,
          image: require('~/assets/images/enjoy_eyecatch2.png'),
          title: 'クルージングパーティー',
          sentence: '花火以外のパフォーマンスで一日中楽しめます。様々なコンテンツで一日中楽しめるのが星駆競技大会です。日中に見れる星駆地域の郷⼟芸能団体のパフォーマンスは、お祭りムードを盛り上げます。その他にもお子様向けのコンテンツなど準備中です。詳細はHPやSNSで随時公開していきます。',
        },
        {
          id: 3,
          image: require('~/assets/images/enjoy_eyecatch3.png'),
          title: 'パフォーマンス',
          sentence: '花火以外のパフォーマンスで一日中楽しめます。様々なコンテンツで一日中楽しめるのが星駆競技大会です。日中に見れる星駆地域の郷⼟芸能団体のパフォーマンスは、お祭りムードを盛り上げます。その他にもお子様向けのコンテンツなど準備中です。詳細はHPやSNSで随時公開していきます。',
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped> // PC first
.fv {
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url('~/assets/images/enjoy.jpg') no-repeat border-box;
  background-size: cover;
  @include mq(md) { // TAB/SP用関数
    height: 70vh;
  }
  .fv_title {
    @include absolute(35%, 50%, null, null);
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
  .fv_text {
    @include absolute(70%, 50%, null, null);
    transform: translate(-50%, -50%);
    width: max-content;
    margin: 20px 0;
    padding: 35px 20px;
    background: rgba($color: #fff, $alpha: .2);
    transition: all .1s;
    @include mq(md) { // TAB/SP用関数
      width: 90%;
    }
    &:hover {
      background: rgba($color: #ed20ae, $alpha: .7);
      transition: all .1s;
    }
    p {
      text-align: center;
      font-size: 3.5rem;
      font-weight: bold;
      color: #fff;
      letter-spacing: 30px;
      line-height: 60px;
      @include mq(md) { // TAB/SP用関数
        font-size: 1.8rem;
        letter-spacing: 10px;
        line-height: 30px;
      }
      span {
        font-size: 9.6rem;
        @include mq(md) { // TAB/SP用関数
          font-size: 4rem;
        }
      }
    }
  }
}
.fireworks {
  padding: 88px 0;
  background: #010745;
  .container {
    .fireworks_title {
      @include flex(center, center);
      font-weight: bold;
      color: #fff;
      .year {
        font-size: 19.2rem;
        @include mq(md) { // TAB/SP用関数
          font-size: 4rem;
        }
      }
      .name {
        font-size: 6.4rem;
        letter-spacing: 30px;
        line-height: 90px;
        @include mq(md) { // TAB/SP用関数
          font-size: 3rem;
          letter-spacing: 5px;
          line-height: 45px;
        }
      }
    }
    .fireworks_text {
      @include flex(center, center);
      p {
        margin: 50px 0 0;
        font-size: 3rem;
        line-height: 60px;
        color: #fff;
        @include mq(md) { // TAB/SP用関数
          font-size: 1.6rem;
          line-height: 30px
        }
      }
    }
    .fireworks_link {
      @include flex(center, center);
      a {
        margin: 150px 0 0;
        padding: 35px 140px;
        background: #fff;
        font-size: 3.2rem;
        font-weight: bold;
        letter-spacing: 3px;
        @include mq(md) { // TAB/SP用関数
          margin: 50px 0 0;
          padding: 20px;
          font-size: 2rem;
        }
      }
    }
  }
}
.program {
  background: url('~assets/images/bg_main.jpg') border-box;
  background-size: contain;
  .program_wrapper {
    padding: 60px 0;
    background: rgba($color: #fff, $alpha: .9);
    .container {
      text-align: center;
      h3 {
        display: inline-block;
        margin: 0 auto 60px;
        padding: 0 0 27.5px;
        border-bottom: 1px solid #010745;
        font-size: 4.1rem;
        font-weight: bold;
        @include mq(md) { // TAB/SP用関数
          margin: 0 auto 20px;
        }
      }
    }
  }
}
</style>