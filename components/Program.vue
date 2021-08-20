<template>
<ul>
  <li v-for="item in items" :key="item.id">
    <div class="program_items">
      <div class="program_eyecatch">
        <img :src="item.image">
      </div>
      <div class="program_text">
        <h4>{{ item.title }}</h4>
        <p>
          {{ item.sentence }}
        </p>
      </div>
    </div>
  </li>
</ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped> // PC first
ul {
  li {
    margin: 80px 0;
    @include mq(md) { // TAB/SP用関数
      margin: 40px 0;
    }
    .program_items {
      @include flex(null, null);
      width: 100%;
      @include mq(md) { // TAB/SP用関数
        display: block;
      }
      .program_eyecatch {
        width: 50%;
        height: 50%;
        @include mq(md) { // TAB/SP用関数
          width: 100%;
        }
        img {
          width: 100%;
          border: 4px solid #010745;
        }
      }
      .program_text {
        width: 50%;
        border: 4px solid #010745;
        @include mq(md) { // TAB/SP用関数
          width: 100%;
        }
        h4 {
          padding: 2.5vw 0;
          border-bottom: 4px solid #010745;
          font-size: 3.2vw;
          @include mq(md) { // TAB/SP用関数
            font-size: 2.8rem;
          }
        }
        p {
          margin: 1.8vw;
          font-size: 1.8vw;
          line-height: 2.5vw;
          @include mq(md) { // TAB/SP用関数
            font-size: 1.6rem;
            text-align: left;
            line-height: initial;
          }
        }
      }
    }
    &:nth-of-type(2n) {
      .program_items {
        .program_eyecatch {
          order: 2;
        }
        .program_text {
          border: 4px solid #010745;
          order: 1;
        }
      }
    }
  }
}
</style>