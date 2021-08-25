<template>
  <div class="wrapper">
    <Header/>
    <main>
      <section class="fv">
        <div class="container">
          <div class="fv_title">
            <h2>
              <img src="~/assets/images/fv_visit.svg" alt="巡る">
            </h2>
          </div>
          <div class="fv_content" id="visit">
            <ul>
              <li v-for="tab in tabs" :key="tab.id">
                <button @click="change(tab.id)"><img :src="tab.image"></button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div class="bg">
        <Visit :isActive="isActive"/>
      </div>
    </main>
    <Map :isActive="isActive"/>
    <Footer/>
    <ScrollTopButton/>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '巡る'
    }
  },
  data() {
    return {
      tabs: [
        {
          id: 1,
          image: require('~/assets/images/visit_himawari.png')
        },
        {
          id: 2,
          image: require('~/assets/images/visit_sl.png')
        },
        {
          id: 3,
          image: require('~/assets/images/visit_yado.png')
        }
      ],
      isActive: 1
    }
  },
  methods: {
    change(id) {
      this.isActive = id;
      const target = document.getElementById('visit');
      if (target) {
        window.scrollTo({ left: 0, top: target.offsetTop, behavior: 'smooth' });
      }
    }
  }
}
</script>

<style lang="scss" scoped> // PC first
main {
  background: url('~assets/images/bg_main.jpg') border-box;
  background-size: contain;
  .fv {
    overflow: hidden;
    position: relative;
    width: 100vw;
    height: 100vh;
    background: url('~/assets/images/visit.jpg') no-repeat border-box;
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
    .fv_content {
      @include absolute(null, 50%, -3%, null);
      transform: translate(-50%, -10%);
      width: 100%;
      padding: 35px 20px;
      transition: all .1s;
      ul {
        @include flex(space-around, center);
        li {
          position: relative;
          padding: 0 20px;
          &::before {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -15px;
            border: 15px solid transparent;
            border-top: 15px solid #fff;
          }
          button {
            position: relative;
            width: 100%;
            border: 3px solid #fff;
            &::before {
              display: none;
              content: "";
              @include absolute(0, 0, null, null);
              width: 100%;
              height: 100%;
              background: #fff;
              opacity: .5;
            }
            &:hover::before {
              display: block;
            }
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
  .bg {
    background: rgba($color: #fff, $alpha: .9);
  }
}
</style>