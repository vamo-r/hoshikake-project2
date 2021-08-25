<template>
  <div class="map">

    <div v-if="isActive === 1">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69528.07262756204!2d133.51250771476384!3d34.44080983401061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35516b3f73f7cb91%3A0xc8bfe8c996ecf799!2z44CSNzE0LTAwNDYg5bKh5bGx55yM56yg5bKh5biC44Kr44OW44OI5Y2X55S677yS77yU77yV4oiS77yV!5e0!3m2!1sja!2sjp!4v1629795156076!5m2!1sja!2sjp" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>

    <div v-else-if="isActive === 2">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120478.2935453364!2d133.49977879801972!3d34.50016698081262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35514121e0f21333%3A0xfa30d32a58855182!2z44CSNzE0LTAwMDcg5bKh5bGx55yM56yg5bKh5biC5bGx5Y-j77yR77yU77yV77yX4oiS77yY!5e0!3m2!1sja!2sjp!4v1629795434015!5m2!1sja!2sjp" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>

    <div v-else-if="isActive === 3">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.2300597915028!2d133.51414271548313!3d34.49705140160503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35516af3e0719a67%3A0xad4273bf0fa20281!2z44CSNzE0LTAwODcg5bKh5bGx55yM56yg5bKh5biC5YWt55Wq55S677yR4oiS77yR77yX!5e0!3m2!1sja!2sjp!4v1629795509971!5m2!1sja!2sjp" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>

    <div v-else>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13171.870533166335!2d133.53980554151534!3d34.376743461210886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35516dbe396e07d5%3A0x701e85394f296eb4!2z5YyX5pyo5bO2!5e0!3m2!1sja!2sjp!4v1628702694087!5m2!1sja!2sjp" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>

  </div>
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

<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 830px;
  @include mq(md) {
    height: 450px;
  }
}
</style>