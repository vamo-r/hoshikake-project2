<template>
  <header>
    <div class="container">
      <div class="header_logo">
        <h1>
          <NuxtLink to="/"><img src="~assets/images/logo.svg" alt="星駆花火大会"></NuxtLink>
        </h1>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
header {
  .container {
    .header_logo {
      position: absolute;
      margin: 15px 0 0;
      z-index: 1;
      h1 {
        a {
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>