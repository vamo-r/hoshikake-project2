<template>
<ul>
  <li v-for="content in contents" :key="content.id">
    <NuxtLink :to="content.url">
      <div class="content_view">
        <img :src="content.image">
      </div>
      <div class="content_text">
        <h2>
          {{ content.bigChar }}
          <span class="small-char">{{ content.smallChar }}</span>
        </h2>
        <p class="sentence">{{ content.sentence }}</p>
        <p class="detail">詳細を見る</p>
      </div>
      <div class="line"></div>
    </NuxtLink>
  </li>
</ul>
</template>

<script>
export default {
  props: {
    contents: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
section.content {
  width: 100%;
  ul {
    li {
      a {
        position: relative;
        display: flex;
        justify-content: flex-start;
        width: 90%;
        margin: 50px 0;
        @include mq(md) { // TAB/SP用関数
          margin: 15px 0;
        }
        .content_view {
          position: relative;
          width: 70%;
          &::before {
            content: "";
            display: block;
            @include absolute(0, 0, null, null);
            width: 100%;
            height: 100%;
            background: #fff;
            opacity: 0;
            transition: all .3s;
            @include mq(md) { // TAB/SP用関数
              display: none;
            }
          }
          img {
            width: 100%;
            @include mq(md) { // TAB/SP用関数
              height: 32vh;
            }
          }
        }
        &:hover .content_view::before {
          opacity: .3;
          transition: all .3s;
        }
        .content_text {
          position: relative;
          width: 30%;
          background: #010745;
          transition: all .3s;
          h2 {
            margin: 15% auto 0;
            text-align: center;
            font-size: 8rem;
            color: #fff;
            @include mq(md) { // TAB/SP用関数
              @include flex(center, center);
              margin: 20px 0;
              font-size: 4rem;
            }
            .small-char {
              display: block;
              width: 30px;
              margin: 0 auto;
              font-size: 2.9rem;
              letter-spacing: 5px;
              color: #fff;
              @include mq(md) { // TAB/SP用関数
                width: auto;
                margin: 0;
                font-size: 1.6rem;
                letter-spacing: 2px;
              }
            }
          }
          .sentence {
            margin: 30px 5%;
            font-size: 1.6rem;
            color: #fff;
            @include mq(md) { // TAB/SP用関数
              font-size: 1.4rem;
            }
          }
          .detail {
            @include absolute(null, 50%, 5%, null);
            transform: translateX(-50%);
            width: fit-content;
            height: fit-content;
            margin: auto;
            padding: 10px 50px;
            background: #fff;
            text-align: center;
            font-size: 1.9rem;
            letter-spacing: 3px;
            transition: all .3s;
            @include mq(md) { // TAB/SP用関数
              padding: 2% 10%;
              font-size: 1.6rem;
            }
            @include mq() { // TAB/SP用関数
              padding: 0;
              letter-spacing: 1;
            }
          }
        }
        &:hover .content_text {
          background: #fff;
          transition: all .3s;
          h2 {
            color: #010745;
            .small-char {
              color: #010745;
            }
          }
          .sentence {
            color: #010745;
            transition: all .3s;
          }
          .detail {
            background: #010745;
            color: #fff;
            transition: all .3s;
          }
        }
        .line {
          @include absolute(2%, 1%, 2%, null);
          width: 98%;
          border: 1px solid #fff;
          z-index: 1;
        }
        &:hover .line {
          border: 1px solid #707070;
        }
      }
      &:nth-of-type(2n) {
        display: flex;
        justify-content: flex-end;
        a {
          .content_view {
            order: 2;
          }
          .content_text {
            order: 1;
          }
        }
      }
      &:nth-of-type(3) {
        margin: 0 0 100px;
      }
    }
  }
}
</style>