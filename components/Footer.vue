<template>
  <footer>
    <div class="container">
      <nav class="footer_nav">
        <ul>
          <li>楽しみ方</li>
          <li>歴史</li>
          <li>周辺スポット</li>
        </ul>
      </nav>
      <div class="footer_logo">
        <img src="">
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

<style lang="scss">
footer {
  background: url('assets/images/footer_bg.jpg') no-repeat border-box;
  background-size: 100% auto;
  font-size: 25px;
  color: #fff;
  .footer_nav {
    margin: 0 5%;
    border-bottom: 1px solid #fff;
    ul {
      display: flex;
      margin: 0 0 100px;
      li {
        padding: 45px 200px 50px 0;
      }
    }
  }
  .footer_info {
    display: flex;
    .footer_info-address {
      margin: 0 60px 0 100px;
    }
  }
  .copyright {
    margin: 0 30px;
    padding: 0 0 20px;
    text-align: right;
  }
}
</style>
