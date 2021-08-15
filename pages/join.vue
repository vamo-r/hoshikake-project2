<template>
  <div class="wrapper">
    <Header/>
    <main>
      <section class="fv">
        <div class="container">
          <div class="fv_title">
            <h2>参加方法</h2>
          </div>
          <div class="fv_text">
            <p>
              大会についての説明大会についての説明大会についての説明<br>
              大会についての説明大会についての説明大会についての説明<br>
              大会についての説明大会についての説明大会についての説明<br>
              大会についての説明大会についての説明大会についての説明
            </p>
          </div>
        </div>
      </section>
      <section class="ticket">
        <div class="container">
          <div class="ticket_info">
            <table>
              <tr>
                <th rowspan="2">Cost</th>
                <td>大人</td>
                <td>3000円<span>(税込3300円)</span></td>
              </tr>
              <tr>
                <td>小人</td>
                <td>2500円<span>(税込2750円)</span></td>
              </tr>
            </table>
          </div>
          <button>
            クルーズチケットの購入
            <span>(準備中)</span>
          </button>
        </div>
      </section>
      <section class="timetable">
        <div class="container">

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
      title: '参加方法'
    }
  }
}
</script>

<style lang="scss" scoped>
.fv {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url('~/assets/images/join.jpg') no-repeat border-box;
  background-size: cover;
  .fv_title {
    @include absolute(35%, 50%, null, null);
    transform: translate(-50%, -50%);
    display: inline-block;
    padding: 20px 35px;
    border: 1px solid #fff;
    h2 {
      padding: 60px 150px;
      background: #fff;
      font-size: 71px;
      color: #010745;
    }
  }
  .fv_text {
    @include absolute(70%, 50%, null, null);
    transform: translate(-50%, -50%);
    width: max-content;
    p {
      font-size: 35px;
      color: #fff;
      line-height: 60px;
    }
  }
}
</style>