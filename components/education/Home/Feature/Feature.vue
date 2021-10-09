<template>
  <div class="root">
    <div id="watched_counter" />
    <v-container class="max-md">
      <title-main
        :head="$t('education.feature_title')"
        :desc="$t('education.feature_desc')"
        align="center"
        color="primary"
      />
      <v-row class="spacing8 grid">
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img
                class="img-2d3d"
                :src="imgAPI.education[28]"
                :data-2d="imgAPI.education[27]"
                :data-3d="imgAPI.education[28]"
                alt="feature"
              />
            </figure>
            <div class="text" v-if="loaded">
              <h4 class="use-text-subtitle">
                +<span
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 100,
                    options: { duration: 1 }
                  }"
                />K
              </h4>
              <h6 class="use-text-subtitle2">
                {{ $t('education.counter_videos') }}
              </h6>
            </div>
          </div>
        </v-col>
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img
                class="img-2d3d"
                :src="imgAPI.education[30]"
                :data-2d="imgAPI.education[29]"
                :data-3d="imgAPI.education[30]"
                alt="feature"
              />
            </figure>
            <div class="text" v-if="loaded">
              <h4 class="use-text-subtitle">
                +<span
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 200,
                    options: { duration: 1 }
                  }"
                />
              </h4>
              <h6 class="use-text-subtitle2">
                {{ $t('education.counter_mentors') }}
              </h6>
            </div>
          </div>
        </v-col>
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img
                class="img-2d3d"
                :src="imgAPI.education[32]"
                :data-2d="imgAPI.education[31]"
                :data-3d="imgAPI.education[32]"
                alt="feature"
              />
            </figure>
            <div class="text" v-if="loaded">
              <h4 class="use-text-subtitle">
                $<span
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 500,
                    options: { duration: 2 }
                  }"
                />
              </h4>
              <h6 class="use-text-subtitle2">
                {{ $t('education.counter_save') }}
              </h6>
            </div>
          </div>
        </v-col>
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img
                class="img-2d3d"
                :src="imgAPI.education[34]"
                :data-2d="imgAPI.education[33]"
                :data-3d="imgAPI.education[34]"
                alt="feature"
              />
            </figure>
            <div class="text" v-if="loaded">
              <h4 class="use-text-subtitle">Free</h4>
              <h6 class="use-text-subtitle2">
                {{ $t('education.counter_free') }}
              </h6>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'feature-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import Title from '../../Title'

export default {
  components: {
    'title-main': Title
  },
  data() {
    return {
      imgAPI: imgAPI,
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
