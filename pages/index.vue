<template>
  <div class="wrapper">
    <header class="header">
      <nav class="header_nav">
        <NuxtLink to="/"><img src="~assets/images/beginer_mark.svg">初めて</NuxtLink>
      </nav>
    </header>
    <main>
      <section class="fv">
        <video class="fv_video" src="~assets/movies/fv.mp4" type="video/mp4" autoplay muted loop playsinline/>
        <img class="fv_logo" src="~assets/images/logo.png" alt="星駆花火大会">
      </section>
      <section class="nav">
        <div class="container">
          <nav>
            <ul>
              <li><NuxtLink to="/join">参加方法</NuxtLink></li>
              <li><NuxtLink to="/enjoy">楽しみ方</NuxtLink></li>
              <li><NuxtLink to="/visit">巡る</NuxtLink></li>
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
    </main>
    <Footer/>
    <transition name="fade">
      <button v-show="showButton" @click="returnTop">TOP</button>
    </transition>
  </div>
</template>

<script>
import Mixin from '../mixins/mixin.js'

export default {
  mixins: [Mixin]
}
</script>

<style lang="scss">
.wrapper {
  position: relative;
  .header_nav {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    a {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 35px 45px 0 0;
      font-size: 37px;
      color: #fff;
    }
  }
  main {
    .fv{
      position: relative;
      overflow: hidden;
      width: 100vw;
      height: 100vh;
      .fv_video {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        z-index: -1;
      }
      .fv_logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        a {
          padding: 50px;
          background: #fff;
          border: 1px solid #707070;
        }
      }
      li + li {
        margin: 0 0 0 100px;
      }
    }
    .convention {
      text-align: center;
      color: #010745;
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
  button {
    position: fixed;
    right: 15px;
    bottom: 60px;
    padding: 10px;
    background: #fff;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
}
</style>