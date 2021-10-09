<template>
  <div class="root">
    <v-dialog
      v-model="dialog"
      max-width="690"
    >
      <v-card class="video-popup">
        <v-card-title class="headline mb-3 d-flex justify-space-between">
          <h4 class="use-text-subtitle">
            {{ $t('education.blog_video') }}
          </h4>
          <v-btn icon @click="handleVideoClose()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <div class="text-center" v-if="yt">
          <youtube
            :video-id="videoId"
            :player-vars="playerVars"
            :width= "640"
            :height="360"
            ref="youtube"
          />
        </div>
      </v-card>
    </v-dialog>
    <hidden point="smDown">
      <div class="deco" />
    </hidden>
    <v-container class="fixed-width">
      <div class="pa-md-8 pa-2">
        <title-main
          :head="$t('education.blog_title')"
          :desc="$t('education.blog_desc')"
          :align="isMobile ? 'center' : 'left'"
          color="secondary"
        />
      </div>
      <u-animate-container>
        <v-row :class="[isDesktop ? 'row-reverse' : '']">
          <v-col class="pa-md-8" md="6" cols="12">
            <u-animate
              :offset="-100"
              delay="0.2s"
              name="fadeInRightShort"
              duration="0.3s"
            >
              <div class="video-wrap">
                <div class="video-carousel" v-if="loaded">
                  <v-card class="item">
                    <img :src="imgAPI.education[14]" alt="cover" />
                    <v-btn
                      icon
                      class="play-btn"
                      @click="handleVideoOpen"
                    >
                      <v-icon>mdi-play</v-icon>
                    </v-btn>
                  </v-card>
                </div>
              </div>
            </u-animate>
          </v-col>
          <v-col class="pa-md-10 pa-4" md="6" cols="12">
            <div class="blog-list" v-if="loaded">
              <div v-for="(item, index) in blogData" :key="index">
                <u-animate
                  :offset="-200"
                  :delay="(index *0.2) + 's'"
                  name="fadeInLeftShort"
                  duration="0.6s"
                >
                  <blog-card
                    :category="item.category"
                    :title="item.title"
                    :date="item.date"
                  />
                </u-animate>
              </div>
              <v-btn class="more" :href="link.education.blog" text color="secondary">more</v-btn>
            </div>
          </v-col>
        </v-row>
      </u-animate-container>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './blog-style.scss';
</style>

<script>
import link from '~/static/text/link'
import imgAPI from '~/static/images/imgAPI'
import youtube from '~/youtube'
import Title from '../../Title'
import BlogCard from '../../Cards/BlogCard'
import Hidden from '../../Hidden'

const blogData = [
  {
    title: 'Vestibulum vitae tristique urna. Mauris non cursus quam',
    category: 'Science - Math',
    date: 'Feb 08 2021'
  },
  {
    title: 'Vestibulum vitae tristique urna. Mauris non cursus quam',
    category: 'Science - Math',
    date: 'Feb 08 2021'
  },
  {
    title: 'Vestibulum vitae tristique urna. Mauris non cursus quam',
    category: 'Science - Math',
    date: 'Feb 08 2021'
  }
]

export default {
  components: {
    'title-main': Title,
    Hidden,
    BlogCard
  },
  data() {
    return {
      link: link,
      dialog: false,
      imgAPI: imgAPI,
      yt: youtube,
      loaded: false,
      videoId: '6p0VM-yUpGk',
      blogData: blogData,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'http://localhost:8004'
      }
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleVideoOpen() {
      this.dialog = true
      if (this.yt.use) {
        setTimeout(() => {
          this.player = this.$refs.youtube.player
          this.player.playVideo()
        }, 100)
      }
    },
    handleVideoClose() {
      this.dialog = false
      this.player.pauseVideo()
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
    isDesktop() {
      const smUp = this.$store.state.breakpoints.smUp
      return smUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
