<template>
  <div class="wrapper">
    <Header/>
    <main>
      <section class="fv">
        <div class="fv_title">
          <h2>
            <img src="~/assets/images/fv_join.svg" alt="参加方法">
          </h2>
        </div>
        <div class="fv_text">
          <p>
            大会についての説明大会についての説明大会についての説明<br>
            大会についての説明大会についての説明大会についての説明<br>
            大会についての説明大会についての説明大会についての説明<br>
            大会についての説明大会についての説明大会についての説明
          </p>
        </div>
      </section>
      <section class="ticket">
        <div class="container">
          <div class="ticket_info">
            <div class="info_item1">
              <div class="info_title">
                <h3>Cost</h3>
              </div>
              <div class="info_content">
                <p>
                  大人　3,000円<span class="tax">(税込3,300円)</span>
                </p>
                <p>
                  小人　2,500円<span class="tax">(税込2,750円)</span><br>
                  <span class="caution">（小学生以下）</span>
                </p>
              </div>
            </div>
            <div class="info_item2">
              <div class="info_title">
                <h3>Contents</h3>
              </div>
              <div class="info_content">
                <p>花火　海の上 特別展望デッキからの観覧</p>
                <p>
                  食事　星駆地産品を使ったディナー付き<br>
                  <span class="caution">（ワンドリンク付き）</span>
                </p>
                <p>日時　8月29日（日） 18:00-21:30</p>
              </div>
            </div>
          </div>
          <button @click="alert()">
            クルーズチケットの購入<br>
            <span>(準備中)</span>
          </button>
        </div>
      </section>
      <section class="timetable">
        <div class="timetable_wrapper">
          <div class="container">
            <h3>クルージング船　運行ダイヤ</h3>

            <div class="timetable_cruising">
              <div class="type">
                <h4>大福丸クルージング</h4>
                <table>
                  <tr>
                    <th>伏越港 発</th>
                    <th>便</th>
                    <th>伏越港 着</th>
                  </tr>
                  <tr>
                    <td>17:30</td>
                    <td>1</td>
                    <td>21:15</td>
                  </tr>
                  <tr>
                    <td>17:40</td>
                    <td>2</td>
                    <td>21:25</td>
                  </tr>
                  <tr>
                    <td>17:50</td>
                    <td>3</td>
                    <td>21:35</td>
                  </tr>
                  <tr>
                    <td>18:00</td>
                    <td>4</td>
                    <td>21:45</td>
                  </tr>
                  <tr>
                    <td>18:10</td>
                    <td>5</td>
                    <td>21:55</td>
                  </tr>
                  <tr>
                    <td>18:20</td>
                    <td>6</td>
                    <td>22:05</td>
                  </tr>
                </table>
              </div>
              <div class="type">
                <h4>金風呂丸クルージング</h4>
                <table>
                  <tr>
                    <th>伏越港 発</th>
                    <th>便</th>
                    <th>伏越港 着</th>
                  </tr>
                  <tr>
                    <td>17:30</td>
                    <td>1</td>
                    <td>21:15</td>
                  </tr>
                  <tr>
                    <td>17:40</td>
                    <td>2</td>
                    <td>21:25</td>
                  </tr>
                  <tr>
                    <td>17:50</td>
                    <td>3</td>
                    <td>21:35</td>
                  </tr>
                  <tr>
                    <td>18:00</td>
                    <td>4</td>
                    <td>21:45</td>
                  </tr>
                  <tr>
                    <td>18:10</td>
                    <td>5</td>
                    <td>21:55</td>
                  </tr>
                  <tr>
                    <td>18:20</td>
                    <td>6</td>
                    <td>22:05</td>
                  </tr>
                </table>
              </div>
              <div class="type">
                <h4>星駆丸クルージング</h4>
                  <table>
                  <tr>
                    <th>伏越港 発</th>
                    <th>便</th>
                    <th>伏越港 着</th>
                  </tr>
                  <tr>
                    <td>17:30</td>
                    <td>1</td>
                    <td>21:15</td>
                  </tr>
                  <tr>
                    <td>17:40</td>
                    <td>2</td>
                    <td>21:25</td>
                  </tr>
                  <tr>
                    <td>17:50</td>
                    <td>3</td>
                    <td>21:35</td>
                  </tr>
                  <tr>
                    <td>18:00</td>
                    <td>4</td>
                    <td>21:45</td>
                  </tr>
                  <tr>
                    <td>18:10</td>
                    <td>5</td>
                    <td>21:55</td>
                  </tr>
                  <tr>
                    <td>18:20</td>
                    <td>6</td>
                    <td>22:05</td>
                  </tr>
                </table>
              </div>
            </div>

            <h3>新北島行フェリー　運行ダイヤ</h3>
            <h4>行き</h4>
            <div class="timetable_ferry">
              <div class="type">
                <h4>大福丸フェリー</h4>
                <table>
                  <tr>
                    <th>伏越港 発</th>
                    <th>便</th>
                    <th>伏越港 着</th>
                  </tr>
                  <tr>
                    <td>17:30</td>
                    <td>1</td>
                    <td>17:50</td>
                  </tr>
                  <tr>
                    <td>17:40</td>
                    <td>2</td>
                    <td>18:00</td>
                  </tr>
                  <tr>
                    <td>17:50</td>
                    <td>3</td>
                    <td>18:10</td>
                  </tr>
                  <tr>
                    <td>18:00</td>
                    <td>4</td>
                    <td>18:20</td>
                  </tr>
                  <tr>
                    <td>18:10</td>
                    <td>5</td>
                    <td>18:30</td>
                  </tr>
                  <tr>
                    <td>18:20</td>
                    <td>6</td>
                    <td>18:40</td>
                  </tr>
                </table>
              </div>
              <div class="type">
                <h4>金風呂丸フェリー</h4>
                <table>
                  <tr>
                    <th>伏越港 発</th>
                    <th>便</th>
                    <th>伏越港 着</th>
                  </tr>
                  <tr>
                    <td>17:30</td>
                    <td>1</td>
                    <td>17:50</td>
                  </tr>
                  <tr>
                    <td>17:40</td>
                    <td>2</td>
                    <td>18:00</td>
                  </tr>
                  <tr>
                    <td>17:50</td>
                    <td>3</td>
                    <td>18:10</td>
                  </tr>
                  <tr>
                    <td>18:00</td>
                    <td>4</td>
                    <td>18:20</td>
                  </tr>
                  <tr>
                    <td>18:10</td>
                    <td>5</td>
                    <td>18:30</td>
                  </tr>
                  <tr>
                    <td>18:20</td>
                    <td>6</td>
                    <td>18:40</td>
                  </tr>
                </table>
              </div>
              <div class="type">
                <h4>星駆丸フェリー</h4>
                <table>
                  <tr>
                    <th>伏越港 発</th>
                    <th>便</th>
                    <th>伏越港 着</th>
                  </tr>
                  <tr>
                    <td>17:30</td>
                    <td>1</td>
                    <td>17:50</td>
                  </tr>
                  <tr>
                    <td>17:40</td>
                    <td>2</td>
                    <td>18:00</td>
                  </tr>
                  <tr>
                    <td>17:50</td>
                    <td>3</td>
                    <td>18:10</td>
                  </tr>
                  <tr>
                    <td>18:00</td>
                    <td>4</td>
                    <td>18:20</td>
                  </tr>
                  <tr>
                    <td>18:10</td>
                    <td>5</td>
                    <td>18:30</td>
                  </tr>
                  <tr>
                    <td>18:20</td>
                    <td>6</td>
                    <td>18:40</td>
                  </tr>
                </table>
              </div>
            </div>
            <h4>帰り</h4>
            <div class="timetable_ferry">
              <div class="type">
                <h4>大福丸フェリー</h4>
                <table>
                  <tr>
                    <th>伏越港 発</th>
                    <th>便</th>
                    <th>伏越港 着</th>
                  </tr>
                  <tr>
                    <td>17:30</td>
                    <td>1</td>
                    <td>17:50</td>
                  </tr>
                  <tr>
                    <td>17:40</td>
                    <td>2</td>
                    <td>18:00</td>
                  </tr>
                  <tr>
                    <td>17:50</td>
                    <td>3</td>
                    <td>18:10</td>
                  </tr>
                  <tr>
                    <td>18:00</td>
                    <td>4</td>
                    <td>18:20</td>
                  </tr>
                  <tr>
                    <td>18:10</td>
                    <td>5</td>
                    <td>18:30</td>
                  </tr>
                  <tr>
                    <td>18:20</td>
                    <td>6</td>
                    <td>18:40</td>
                  </tr>
                </table>
              </div>
              <div class="type">
                <h4>金風呂丸フェリー</h4>
                <table>
                  <tr>
                    <th>伏越港 発</th>
                    <th>便</th>
                    <th>伏越港 着</th>
                  </tr>
                  <tr>
                    <td>17:30</td>
                    <td>1</td>
                    <td>17:50</td>
                  </tr>
                  <tr>
                    <td>17:40</td>
                    <td>2</td>
                    <td>18:00</td>
                  </tr>
                  <tr>
                    <td>17:50</td>
                    <td>3</td>
                    <td>18:10</td>
                  </tr>
                  <tr>
                    <td>18:00</td>
                    <td>4</td>
                    <td>18:20</td>
                  </tr>
                  <tr>
                    <td>18:10</td>
                    <td>5</td>
                    <td>18:30</td>
                  </tr>
                  <tr>
                    <td>18:20</td>
                    <td>6</td>
                    <td>18:40</td>
                  </tr>
                </table>
              </div>
              <div class="type">
                <h4>星駆丸フェリー</h4>
                <table>
                  <tr>
                    <th>伏越港 発</th>
                    <th>便</th>
                    <th>伏越港 着</th>
                  </tr>
                  <tr>
                    <td>17:30</td>
                    <td>1</td>
                    <td>17:50</td>
                  </tr>
                  <tr>
                    <td>17:40</td>
                    <td>2</td>
                    <td>18:00</td>
                  </tr>
                  <tr>
                    <td>17:50</td>
                    <td>3</td>
                    <td>18:10</td>
                  </tr>
                  <tr>
                    <td>18:00</td>
                    <td>4</td>
                    <td>18:20</td>
                  </tr>
                  <tr>
                    <td>18:10</td>
                    <td>5</td>
                    <td>18:30</td>
                  </tr>
                  <tr>
                    <td>18:20</td>
                    <td>6</td>
                    <td>18:40</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="access">
        <div class="container">
          <h3>アクセス</h3>
          <p>
            北木島へは伏越港発着の大福丸フェリーか金風呂丸フェリー、又は笠岡の住吉港から<br>
            三洋汽船が運航する旅客船を利用します。フェリーは島の西側の豊浦港と金風呂港、<br>
            旅客船は島の東側の北木島港（大浦港）と、楠港に停まります。<br>
            旅客船は「笠岡～佐柳本浦」航路に乗船ください。③の高速船と④の普通船があります。<br>
            尚、各島へは海上タクシーの利用も可能。人数やプランによって検討してみるのもよいでしょう。
          </p>
        </div>
      </section>
      <Map/>
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
  },
  methods: {
    alert() {
      alert('模擬サイトの為、販売されません。');
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
  background: url('~/assets/images/join.jpg') no-repeat border-box;
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
    @include mq(md) { // TAB/SP用関数
      width: 90%;
    }
    p {
      font-size: 3.5rem;
      color: #fff;
      line-height: 60px;
      @include mq(md) { // TAB/SP用関数
        font-size: 1.6rem;
        line-height: 30px;
      }
    }
  }
}
.ticket {
  position: relative;
  width: 100%;
  padding: 60px 0;
  background: url('~assets/images/bg_ticket.png') no-repeat border-box;
  background-color: rgba(255, 255, 255, .7);
  background-blend-mode: lighten;
  background-size: 100% auto;
  @include mq(md) { // TAB/SP用関数
    background-position: center;
  }
  .container {
    .ticket_info {
      @include flex(space-between, center);
      padding: 0 0 60px;
      @include mq(md) { // TAB/SP用関数
        display: block;
        padding: 0 0 30px;
      }
      .info_item1 {
        @include flex(center, center);
        font-size: 2.9rem;
        font-weight: bold;
        line-height: 60px;
        @include mq(md) { // TAB/SP用関数
          font-size: 1.6rem;
          line-height: 30px;
        }
      }
      .info_title {
        padding: 30px 30px 30px 0;
      }
      .info_content {
        display: block;
        padding: 0 0 0 30px;
        border-left: 1px solid #010745;
        p {
          .tax{
            font-size: 1.6rem;
            @include mq(md) {
              font-size: 1.2rem;
            }
          }
          .caution {
            display: block;
            text-align: right;
            font-size: 1.9rem;
            @include mq(md) {
              font-size: 1.2rem;
            }
          }
        }
      }
      .info_item2 {
        @include flex(center, center);
        font-size: 2.9rem;
        font-weight: bold;
        line-height: 60px;
        @include mq(md) {
          margin: 30px 0 0;
          font-size: 1.6rem;
          line-height: 30px;
        }
      }
    }
    button {
      display: block;
      margin: 0 auto;
      padding: 25px 100px;
      background: #010745;
      font-size: 2.9rem;
      color: #fff;
      letter-spacing: 5px;
      cursor: pointer;
      @include mq(md) { // TAB/SP用関数
        padding: 10px;
        font-size: 2rem;
      }
      span {
        display: block;
        text-align: center;
        font-size: 1.8rem;
        @include mq(md) { // TAB/SP用関数
          font-size: 1.6rem;
        }
      }
    }
  }
}
.timetable {
  background: url('~assets/images/bg_main.jpg') border-box;
  background-size: contain;
  .timetable_wrapper {
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
          margin: 0 auto 30px;
          font-size: 2.4rem;
        }
      }
      .timetable_cruising {
        @include flex(space-around, center);
        margin: 0 0 270px;
        @include mq(md) { // TAB/SP用関数
          display: block;
          margin: 0 0 120px;
        }
      }
      .type {
        text-align: center;
        h4 {
          margin: 0 0 45px;
          font-size: 3.7rem;
          font-weight: bold;
          @include mq(md) { // TAB/SP用関数
            margin: 45px 0 20px;
            font-size: 2.4rem;
          }
        }
        table {
          margin: 0 auto;
          border: 1px solid #010745;
          text-align: center;
          font-size: 3rem;
          tr {
            border: 1px solid #010745;
            th {
              border: 1px solid #010745;
            }
            td {
              border: 1px solid #010745;
            }
          }
        }
      }
      > h4 {
        text-align: center;
        font-size: 3.8rem;
        font-weight: bold;
        @include mq(md) { // TAB/SP用関数
          font-size: 2.4rem;
        }
      }
      .timetable_ferry {
        @include flex(space-around, center);
        margin: 72px 0 100px;
        @include mq(md) { // TAB/SP用関数
          display: block;
          margin: 20px 0 80px;
        }
      }
    }
  }
}
.access {
  padding: 110px 0 150px;
  background: #ebebeb;
  @include mq(md) { // TAB/SP用関数
    padding: 50px 0 60px;
  }
  .container {
    text-align: center;
    h3 {
      display: inline-block;
      padding: 0 0 27.5px;
      border-bottom: 1px solid #010745;
      font-size: 4.3rem;
      font-weight: bold;
      @include mq(md) { // TAB/SP用関数
        font-size: 4rem;
      }
    }
    p {
      display: table;
      margin: 107px auto 0;
      text-align: initial;
      font-size: 3rem;
      line-height: 60px;
      @include mq(md) { // TAB/SP用関数
        margin: 40px auto 0;
        font-size: 1.6rem;
        line-height: 30px;
      }
    }
  }
}
</style>