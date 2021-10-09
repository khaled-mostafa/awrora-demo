<template>
  <v-container :class="{ 'fixed-width': mdUp }">
    <u-animate-container>
      <div class="root">
        <div class="deco">
          <span class="deco-top" />
          <span class="deco-bottom" />
          <span class="deco-right" />
        </div>
        <u-animate
          :offset="40"
          name="fadeInUpShort"
          delay="0.3s"
          duration="0.5s"
        >
          <v-card class="paper">
            <v-row align="center">
              <v-col cols="12" md="8" class="px-sm-6">
                <h4 class="use-text-title2 pb-2">
                  {{ $t('marketing.cta_title') }}
                </h4>
                <p>
                  {{ $t('marketing.cta_subtitle') }}
                </p>
              </v-col>
              <v-col cols="12" md="4" class="ps-md-15">
                <div class="d-flex align-center">
                  <div class="deco-button" />
                  <v-btn
                    :href="link.marketing.contact"
                    :color="isTablet ? 'white' : 'primary'"
                    :outlined="isTablet"
                    block
                    large
                    class="button"
                  >
                    {{ $t('common.btn_join') }}
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </u-animate>
      </div>
    </u-animate-container>
  </v-container>
</template>

<style lang="scss" scoped>
@import './action-style.scss';
</style>

<script>
import link from '~/static/text/link'

export default {
  data() {
    return {
      link: link
    }
  },
  computed: {
    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    },
    isTablet() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
