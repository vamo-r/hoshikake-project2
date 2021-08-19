<template>
  <section id="visit">
    <div class="container" v-if="isActive === 1">
      <h2>ひまわり畑</h2>
      <p>
        平成2年に24年の歳月を経て完成した笠岡湾干拓地。この干拓地に平成23年<br>
        8月に道の駅「笠岡ベイファーム」が誕生しました。そのオープンに合わせて<br>
        太陽の光をさんさんと浴びた100万本のひまわり畑が出現。見頃は8月初旬。<br>
        展望台からの眺めも圧巻。真夏の太陽の下で咲き競う大輪のひまわり。<br>
        広い干拓地にふさわしい圧倒的なスケールで、道の駅の夏を彩ります。
      </p>
      <div class="gallery">
        <div class="gallery_main">
          <img src="~/assets/images/image_himawari1.png">
        </div>
        <div class="gallery_sub">
          <img src="~/assets/images/image_himawari2.png">
          <div>
            <img src="~/assets/images/image_himawari3.png">
            <img src="~/assets/images/image_himawari4.png">
          </div>
        </div>
      </div>
    </div>

    <div class="container" v-else-if="isActive === 2">
      <h2>井笠鉄道記念館</h2>
      <p>
        井笠鉄道の最盛期には，笠岡駅と井原駅を結ぶ本線，途中北川駅と矢掛駅を<br>
        結ぶ矢掛線，井原駅と広島県の神辺駅を結ぶ神辺線の３路線がありました。<br>
        開業は1913（大正２）年で，その時の名前は井原笠岡軽便鉄道というもの<br>
        でした。1967（昭和４２）年，当時の国鉄井原線の建設決定により，廃線<br>
        が決まり，1971（昭和４６）年に全線が廃線となりました。
      </p>
      <div class="gallery">
        <div class="gallery_main">
          <img src="~/assets/images/image_sl1.png">
        </div>
        <div class="gallery_sub">
          <img src="~/assets/images/image_sl2.png">
          <div>
            <img src="~/assets/images/image_sl3.png">
            <img src="~/assets/images/image_sl4.png">
          </div>
        </div>
      </div>
    </div>

    <div class="container" v-else-if="isActive === 3">
      <h2>宿</h2>
      <p>
        タイトルの説明タイトルの説明タイトルの説明タイトルの説明タイトルの説明<br>
        タイトルの説明タイトルの説明タイトルの説明タイトルの説明タイトルの説明<br>
        タイトルの説明タイトルの説明タイトルの説明タイトルの説明タイトルの説明<br>
        タイトルの説明タイトルの説明タイトルの説明タイトルの説明タイトルの説明<br>
      </p>
      <div class="gallery">
        <div class="gallery_main">
          <img src="~/assets/images/image_yado1.png">
        </div>
        <div class="gallery_sub">
          <img src="~/assets/images/image_yado2.png">
          <div>
            <img src="~/assets/images/image_yado3.png">
            <img src="~/assets/images/image_yado4.png">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped> // PC first
section#visit {
  text-align: center;
  .container {
    h2 {
      display: inline-block;
      margin: 30px 0 0;
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
    .gallery {
      @include flex(space-between, null);
      .gallery_main {
        width: 45%;
        margin: 0 20px 0 0;
        img {
          width: 100%;
        }
      }
      .gallery_sub {
        width: 50%;
        img {
          width: 100%;
        }
        div {
          @include flex(space-between, flex-end);
          margin: 10px 0 0;
          img {
            width: 45%;
          }
        }
      }
    }
  }
  &.fade-enter,
  &.fade-leave-to {
    opacity: 0;
  }
  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity .3s;
  }
}
</style>