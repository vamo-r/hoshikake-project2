<template>
<ul>
  <li v-for="content in contents" :key="content.id">
    <NuxtLink :to="content.url">
      <div class="content_view">
        <img :src="content.image">
      </div>
      <div class="content_text">
        <h2>{{ content.h2 }}<span>{{ content.span }}</span></h2>
        <p>詳細を見る</p>
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
        .content_view {
          width: 70%;
          img {
            width: 100%;
            opacity: 1;
            transition: all .3s;
          }
        }
        &:hover .content_view {
          img {
            opacity: .5;
            transition: all .3s;
          }
        }
        .content_text {
          display: grid;
          width: 30%;
          background: #010745;
          transition: all .3s;
          h2 {
            writing-mode: vertical-rl;
            display: flex;
            align-items: center;
            margin: 70px 0 0;
            font-size: 127px;
            color: #fff;
            span {
              display: table-caption;
              font-size: 46px;
              color: #fff;
            }
          }
          p {
            width: fit-content;
            height: fit-content;
            margin: auto;
            padding: 10px 50px;
            background: #fff;
            text-align: center;
            color: #010745;
            letter-spacing: 3px;
            transition: all .3s;
          }
        }
        &:hover .content_text {
          background: #fff;
          transition: all .3s;
          h2 {
            color: #010745;
            span {
              color: #010745;
            }
          }
          p {
            background: #010745;
            color: #fff;
            transition: all .3s;
          }
        }
        .line {
          @include absolute(2%, 1%, 2%, null);
          width: 98%;
          border: 1px solid #fff;
        }
        &:hover .line {
          border: 1px solid #707070;
        }
      }
      &:nth-of-type(2) {
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
    }
  }
}
</style>