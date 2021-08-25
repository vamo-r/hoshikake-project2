<template>
  <div class="wrapper">
    <header class="header">
      <nav class="header_nav">
        <NuxtLink :to="{ path: '/first' }"><img src="~assets/images/icon_beginer-mark.svg">初めての方</NuxtLink>
      </nav>
    </header>
    <main>
      <div class="main_wrapper">
        <section class="fv">
          <video class="fv_video" type="video/mp4" src="~assets/movies/fv.mp4" autoplay muted loop playsinline/>
          <div class="fv_title">
            <h1>
              <img src="~assets/images/fv_logo.svg" alt="星駆花火大会">
            </h1>
          </div>
        </section>
        <section class="nav">
          <div class="container">
            <nav>
              <ul>
                <li v-for="nav in contents" :key="nav.id">
                  <NuxtLink :to="nav.url"><img :src="nav.icon">{{ nav.bigChar }}{{ nav.smallChar }}</NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section class="convention">
          <div class="container">
            <h2>大会について</h2>
            <p>
              星駆花火大会は、20年続く船に乗って花火大会を満喫する日本で唯一のクルージング花火大会です。クルーズ船を始めとした最大50隻以上の船が出航し、海の上から大迫力の花火を目と耳だけではなく、お食事と一緒に五感全てでご体感頂けます。毎年8万名以上の来場者がお越しいただき、大玉や、ナイアガラの花火など、2万発以上のド迫力の花火を音楽と合わせ、お楽しみいただけます。
            </p>
          </div>
        </section>
        <section class="content">
          <Content :contents="contents"/>
        </section>
        <section class="beginer">
          <div class="container">
            <h2>
              <NuxtLink :to="{ path: '/first' }"><img src="~assets/images/icon_beginer-mark.svg">初めての方へ</NuxtLink>
            </h2>
          </div>
        </section>
      </div>
    </main>
    <Footer/>
    <ScrollTopButton/>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '星駆花火大会'
    }
  },
  data() {
    return {
      contents: [
        {
          id: 1,
          url: '/join',
          icon: require('~/assets/images/icon_join.svg'),
          image: require('~/assets/images/join.jpg'),
          bigChar: '参',
          smallChar: '加方法',
          sentence: '船からの観覧ができる、日本で唯一のクルージング花火大会。チケットはこちらから。'
        },
        {
          id: 2,
          url: '/enjoy',
          icon: require('~/assets/images/icon_enjoy.svg'),
          image: require('~/assets/images/enjoy.jpg'),
          bigChar: '楽',
          smallChar: 'しみ方',
          sentence: '大規模な花火エンターテイメントショーや、競技部門も追加され過去最大級の規模で開催する大会です '
        },
        {
          id: 3,
          url: '/visit',
          icon: require('~/assets/images/icon_visit.svg'),
          image: require('~/assets/images/visit.jpg'),
          bigChar: '巡',
          smallChar: 'る',
          sentence: '島に沢山存在する、様々な観光施設や、宿泊施設を御覧ください。'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped> // PC first
.wrapper {
  position: relative;
  .header {
    .header_nav {
      @include absolute(0, null, null, 0);
      z-index: 1;
      a {
        @include flex(flex-end, center);
        color: #fff;
        margin: 35px 45px 0 0;
        font-size: 3rem;
        @include mq() { // SP用関数
          margin: 10px 10px 0 0;
          font-size: 1.8rem;
        }
        img {
          width: 20%;
          padding: 0 20px 0 0;
        }
      }
    }
  }
  main {
    position: relative;
    background: url('assets/images/bg_main.jpg') border-box;
    background-size: contain;
    .main_wrapper {
      background: rgba($color: #fff, $alpha: .9);
      .fv {
        overflow: hidden;
        position: relative;
        width: 100vw;
        height: 100vh;
        @include mq(md) { // TAB/SP用関数
          height: 70vh;
        }
        .fv_video {
          @include absolute(0, 0, null, null);
          width: 100vw;
          height: 100vh;
          object-fit: fill;
          @include mq(md) { // TAB/SP用関数
            height: 70vh;
          }
        }
        .fv_title {
          @include absolute(50%, 50%, null, null);
          transform: translate(-50%, -50%);
          padding: 22px 36px;
          border: 1px solid #fff;
          @include mq() { // SP用関数
            @include absolute(35%, unset, null, null);
            padding: 10px;
            transform: unset;
          }
          h1 {
            width: 100%;
            background: #fff;
            text-align: center;
            font-size: 6.3rem;
            font-weight: bold;
            letter-spacing: 1rem;
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
      section.nav {
        .container {
          nav {
            position: relative;
            @include mq(md) { // TAB/SP用関数
              margin: 20px auto
            }
            ul {
              @include absolute(-150px, null, null, null);
              @include flex(space-around, center);
              width: 100%;
              @include mq(md) { // TAB/SP用関数
                position: static;
              }
              li {
                width: 28%;
                a {
                  @include flex(center, center);
                  width: 100%;
                  padding: 45px 0;
                  background: #fff;
                  border: 1px solid #707070;
                  font-size: 3.3rem;
                  font-weight: bold;
                  letter-spacing: 5px;
                  transition: all .2s;
                  @include mq(md) { // SP用関数
                    display: block;
                    padding: 0;
                    text-align: center;
                    font-size: 1.6rem;
                  }
                  &:hover {
                    transform: translateY(-10px);
                    transition: all .2s;
                  }
                  img {
                    padding: 0 30px 0;
                    @include mq(md) { // TAB/SP用関数
                      display: block;
                      margin: auto;
                      padding: 0;
                    }
                  }
                }
              }
            }
          }
        }
      }
      section.convention {
        text-align: center;
        .container {
          h2 {
            display: inline-block;
            margin: 100px 0 0;
            padding: 27.5px 0;
            border-bottom: 1px solid #010745;
            font-size: 5.9rem;
            @include mq(md) { // TAB/SP用関数
              margin: 10px auto;
              padding: 15px 0;
              font-size: 4rem;
            }
          }
          p {
            padding: 55.5px 0;
            font-size: 3.5rem;
            line-height: 60px;
            @include mq(md) { // TAB/SP用関数
              padding: 20px;
              font-size: 1.6rem;
              line-height: 30px;
            }
          }
        }
      }
      section.beginer {
        position: relative;
        height: 310px;
        margin: 0 0 110px;
        background: url("assets/images/bg_beginer.jpg") no-repeat border-box;
        background-size: cover;
        background-position: center;
        transition: all .2s;
        &:hover {
          transform: translateY(-5px);
          transition: all .2s
        }
        .container {
          h2 {
            @include absolute(50%, 50%, null, null);
            transform: translate(-50%, -50%);
            color: #fff;
            a {
              @include flex(null, center);
              font-size: 5.6rem;
              @include mq(md) { // TAB/SP用関数
                font-size: 2.4rem;
              }
              img {
                margin: 0 45px 0 0;
                @include mq(md) { // TAB/SP用関数
                  width: 15%;
                  margin: 0 10px 0 0;
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