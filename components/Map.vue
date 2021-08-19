<template>
  <div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13171.870533166335!2d133.53980554151534!3d34.376743461210886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35516dbe396e07d5%3A0x701e85394f296eb4!2z5YyX5pyo5bO2!5e0!3m2!1sja!2sjp!4v1628702694087!5m2!1sja!2sjp" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>
</template>

<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 830px;
  @include mq(md) {
    height: 450px;
  }
}
</style>