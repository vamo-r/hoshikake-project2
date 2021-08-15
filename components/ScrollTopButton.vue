<template>
  <transition name="fade">
    <button class="bottom_button" v-show="button" @click="returnTop"></button>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      button: false,
      scroll: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollWindow)
  },
  methods: {
    returnTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    scrollWindow() {
      const top = 500
      this.scroll = window.scrollY
      if (top <= this.scroll) {
        this.button = true
      } else {
        this.button = false
      }
    }
  }
}
</script>

<style lang="scss">
.bottom_button {
  position: fixed;
  right: 15px;
  bottom: 60px;
  width: 40px;
  height: 40px;
  background: #fff;
  border: 1px solid #707070;
  text-align: center;
  color: #010745;
  &::after {
    content: "▲";
    text-align: center;
    color: #010745;
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