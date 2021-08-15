<template>
  <div class="wrapper">
    <header class="header">
      <nav class="header_nav">
        <NuxtLink to="/first"><img src="~assets/images/icon_beginer-mark.svg">初めて</NuxtLink>
      </nav>
    </header>
    <main>
      <div class="main_wrapper">
        <section class="fv">
          <video class="fv_video" type="video/mp4" src="~assets/movies/fv.mp4" autoplay muted loop playsinline/>
          <div class="fv_title">
            <h1>
              <img src="~assets/images/logo_header.svg" alt="星駆花火大会">
            </h1>
          </div>
        </section>
        <section class="nav">
          <div class="container">
            <nav>
              <ul>
                <li>
                  <NuxtLink to="/join"><img src="~assets/images/icon_join.svg">参加方法</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/enjoy"><img src="~assets/images/icon_enjoy.svg">楽しみ方</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/visit"><img src="~assets/images/icon_visit.svg">巡る</NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section class="convention">
          <div class="container">
            <h2>大会について</h2>
            <p>
              大会についての説明大会についての説明大会についての説明<br>
              大会についての説明大会についての説明大会についての説明<br>
              大会についての説明大会についての説明大会についての説明<br>
              大会についての説明大会についての説明大会についての説明<br>
              大会についての説明大会についての説明大会についての説明<br>
            </p>
          </div>
        </section>
        <section class="content">
          <Content :contents="contents"/>
        </section>
        <section class="beginer">
          <div class="container">
            <h2>
              <NuxtLink to="/first"><img src="~assets/images/icon_beginer-mark.svg">初めての方へ</NuxtLink>
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
          image: require('~/assets/images/join.jpg'),
          h2: '参',
          span: '加方法'
        },
        {
          id: 2,
          url: '/enjoy',
          image: require('~/assets/images/enjoy.jpg'),
          h2: '楽',
          span: 'しみ方'
        },
        {
          id: 3,
          url: '/visit',
          image: require('~/assets/images/visit.jpg'),
          h2: '巡',
          span: 'る'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  .header {
    .header_nav {
      @include absolute(0, null, null, 0);
      z-index: 1;
      a {
        @include flex(flex-end, center);
        padding: 35px 45px 0 0;
        font-size: 37px;
        color: #fff;
        img {
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
      background: rgba($color: #fff, $alpha: .8);
      .fv {
        position: relative;
        overflow: hidden;
        width: 100vw;
        height: 100vh;
        .fv_video {
          @include absolute(0, 0, null, null);
          width: 100vw;
          height: 100vh;
          object-fit: fill;
        }
        .fv_title {
          @include absolute(50%, 50%, null, null);
          transform: translate(-50%, -50%);
          padding: 22px 36px;
          border: 1px solid #fff;
          h1 {
            width: 100%;
            background: #fff;
            text-align: center;
            font-size: 63px;
            font-weight: bold;
            color: #010745;
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
            ul {
              @include absolute(-150px, null, null, null);
              @include flex(center, center);
              width: 100%;
              li {
                width: 28%;
                a {
                  @include flex(center, center);
                  width: 100%;
                  padding: 45px 0;
                  background: #fff;
                  border: 1px solid #707070;
                  font-size: 33px;
                  font-weight: bold;
                  color: #010745;
                  letter-spacing: 5px;
                  img {
                    padding: 0 30px 0;
                  }
                }
              }
              li + li {
                margin: 0 0 0 100px;
              }
            }
          }
        }
      }
      section.convention {
        text-align: center;
        color: #010745;
        .container {
          h2 {
            display: inline-block;
            margin: 100px 0 0;
            padding: 27.5px 0;
            border-bottom: 1px solid #010745;
            font-size: 59px;
          }
          p {
            padding: 55.5px 0;
            font-size: 35px;
            line-height: 60px;
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
            @include absolute(0, 0, 0, 0);
            @include flex(center, center);
            margin: auto;
            font-size: 56px;
            color: #fff;
            a {
              @include flex(null, center);
              img {
                margin: 0 45px 0 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>