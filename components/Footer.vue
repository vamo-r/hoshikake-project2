<template>
  <footer>
    <div class="container">
      <nav class="footer_nav">
        <ul>
          <li>
            <div class="menu">
              <NuxtLink :to="{ path: '/join' }">参加方法</NuxtLink>
              <div class="submenu">
                <NuxtLink :to="{ path: '/join', hash: '#ticket' }">チケット購入</NuxtLink>
                <NuxtLink :to="{ path: '/join', hash: '#timetable' }">クルージングダイヤ</NuxtLink>
                <NuxtLink :to="{ path: '/join', hash: '#access' }">アクセス</NuxtLink>
              </div>
            </div>
          </li>
          <li>
            <div class="menu">
              <NuxtLink :to="{ path: '/enjoy' }">楽しみ方</NuxtLink>
              <div class="submenu">
                <NuxtLink :to="{ path: '/join' }">参加方法</NuxtLink>
                <NuxtLink :to="{ path: '/enjoy', hash: '#program' }">特別プログラム</NuxtLink>
              </div>
            </div>
          </li>
          <li>
            <div class="menu">
              <NuxtLink :to="{ path: '/visit' }">巡る</NuxtLink>
              <div class="submenu">
                <a @click="pushRoute(1)">ひまわり畑</a>
                <a @click="pushRoute(2)">鉄道博物館</a>
                <a @click="pushRoute(3)">宿</a>
              </div>
            </div>
          </li>
          <li>
            <div class="menu">
              <NuxtLink :to="{ path: '/first' }">初めての方へ</NuxtLink>
            </div>
          </li>
        </ul>
      </nav>
      <div class="footer_logo">
        <NuxtLink :to="{ path: '/' }"><img src="~assets/images/logo.svg" alt="星駆花火大会"></NuxtLink>
      </div>
      <div class="footer_info">
        <div class="footer_info-address">
          <p>
            〒 714-0301<br>
            岡山県笠岡市北木島星駆町
          </p>
        </div>
        <div class="footer_info-tel">
          <p>TEL: 0865-68-3540（代）</p>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; 2021 星駆花火大会運営事務局</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isActive: null
    }
  },
  methods: {
    pushRoute(id) {
      this.$router.push({ path: '/visit', hash: '#visit', params: { isActive: id } });
    }
  }
}
</script>


<style lang="scss">
footer {
  background: url('assets/images/bg_footer.jpg') no-repeat border-box;
  background-size: cover;
  font-size: 2.5rem;
  color: #fff;
  @include mq(md) { // TAB/SP用関数
    background-size: cover;
    font-size: 1.6rem;
  }
  .container {
    nav {
      padding: 89px 0;
      border-bottom: 1px solid #fff;
      @include mq(md) { // TAB/SP用関数
        padding: 0;
      }
      ul {
        display: flex;
        width: 100%;
        @include mq(md) { // TAB/SP用関数
          display: block;
          padding: 20px 0;
          margin: 0;
        }
        li {
          width: 20%;
          @include mq(md) { // TAB/SP用関数
            width: 100%;
          }
          .menu {
            @include mq(md) { // TAB/SP用関数
              margin: 30px;
            }
            .submenu {
              margin: 0 0 0 20px;
              a {
                display: block;
                margin: 22px 0 0;
                font-size: 1.6rem;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    .footer_logo {
      margin: 45px 30px;
    }
    .footer_info {
      display: flex;
      @include mq(md) { // TAB/SP用関数
        display: block;
      }
      .footer_info-address {
        margin: 0 60px 0 30px;
        @include mq(md) { // TAB/SP用関数
          margin: 0 0 30px 30px;
        }
      }
      .footer_info-tel {
        @include mq(md) { // TAB/SP用関数
          margin: 0 0 0 30px;
        }
      }
    }
    .copyright {
      margin: 0 30px;
      padding: 0 0 20px;
      text-align: right;
      @include mq(md) { // TAB/SP用関数
        margin: 0;
        padding: 30px 0;
      }
    }
  }
}
</style>
