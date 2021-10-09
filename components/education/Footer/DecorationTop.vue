<template>
  <div class="top-deco">
    <u-animate-container>
      <u-animate
        :offset="0"
        delay="0.2s"
        name="zoomInShort"
        duration="0.3s"
      >
        <img
          :src="imgAPI.education[44]"
          :data-2d="imgAPI.education[43]"
          :data-3d="imgAPI.education[44]"
          class="img-2d3d"
          alt="footer"
        />
      </u-animate>
    </u-animate-container>
  </div>
</template>

<style scoped lang="scss">
@import './footer-deco';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'

export default {
  data: () => ({
    imgAPI: imgAPI
  })
}
</script>
