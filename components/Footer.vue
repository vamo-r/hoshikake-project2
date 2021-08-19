<template>
  <footer>
    <div class="container">
      <nav class="footer_nav">
        <ul>
          <li><NuxtLink to="/enjoy">楽しみ方</NuxtLink></li>
          <li><button @click="alert()">歴史</button></li>
          <li><button @click="alert()">周辺スポット</button></li>
        </ul>
      </nav>
      <div class="footer_logo">
        <NuxtLink to="/"><img src="~assets/images/logo.svg" alt="星駆花火大会"></NuxtLink>
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
  methods: {
    alert() {
      alert('このページは作成していません。')
    }
  }
}
</script>


<style lang="scss">
footer {
  background: url('assets/images/bg_footer.jpg') no-repeat border-box;
  background-size: 100% auto;
  font-size: 2.5rem;
  color: #fff;
  @include mq(md) { // TAB/SP用関数
    background-size: cover;
    font-size: 1.6rem;
  }
  .footer_nav {
    border-bottom: 1px solid #fff;
    ul {
      display: flex;
      margin: 0 0 100px;
      @include mq(md) { // TAB/SP用関数
        padding: 45px 0;
        margin: 0;
      }
      li {
        margin: 45px 0 50px 30px;
        @include mq(md) { // TAB/SP用関数
          margin: auto;
        }
      }
      li + li {
        margin: 45px 0 50px 30%;
        @include mq(md) { // TAB/SP用関数
          margin: auto;
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
</style>
