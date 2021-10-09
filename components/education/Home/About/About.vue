<template>
  <div class="root">
    <v-container class="fixed-width">
      <u-animate-container>
        <v-row>
          <v-col md="6" cols="12" class="illu-wrap">
            <u-animate
              :offset="-100"
              delay="0.2s"
              name="fadeInLeftShort"
              duration="0.6s"
            >
              <div class="illustration">
                <img
                  :src="imgAPI.education[38]"
                  :data-2d="imgAPI.education[37]"
                  :data-3d="imgAPI.education[38]"
                  class="img-2d3d"
                  alt="about"
                />
              </div>
            </u-animate>
          </v-col>
          <v-col
            :class="isMobile ? 'text-center' : 'text-start'"
            md="6"
            cols="12"
          >
            <title-main
              :head="$t('education.about_title')"
              :desc="$t('education.about_desc')"
              :align="isMobile ? 'center' : 'left'"
              color="secondary"
            />
            <v-btn :href="link.education.login" class="btn" color="secondary">
              {{ $t('education.about_join') }}
            </v-btn>
          </v-col>
        </v-row>
       </u-animate-container>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './about-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import link from '~/static/text/link'
import Hidden from '../../Hidden'
import Title from '../../Title'

export default {
  components: {
    Hidden,
    'title-main': Title
  },
  data: () => ({
    imgAPI: imgAPI,
    link: link
  }),
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
