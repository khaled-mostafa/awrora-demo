<template>
  <div>
    <v-navigation-drawer
      v-model="openDrawer"
      :width="600"
      absolute
      class="drawer"
      temporary
      right
    >
      <div class="opt-wrap">
        <v-app-bar class="appbar" fixed>
          <v-tabs
            v-model="tab"
            class="tabs"
            color="primary"
            centered
          >
            <hidden point="smUp">
              <v-btn icon @click="handleClose()">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
            </hidden>
            <v-tabs-slider color="primary" />
            <v-tab class="tab-label">
              <v-icon>mdi-palette-outline</v-icon>
              Color
            </v-tab>
            <v-tab class="tab-label">
              <v-icon>mdi-desktop-mac-dashboard</v-icon>
              Layout
            </v-tab>
            <v-tab class="tab-label">
              <v-icon>mdi-text-box-multiple-outline</v-icon>
              Theme
            </v-tab>
          </v-tabs>
        </v-app-bar>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <div class="theme-switched">
              <v-card class="paper">
                <v-row>
                  <v-col sm="6" cols="12" class="margin-bottom">
                    <h6 class="title">Theme Mode</h6>
                    <v-row>
                      <v-col class="py-0" align="start" justify="start">
                        <label class="overline">Light</label>
                        <v-switch
                          v-model="dark"
                          class="switch-toggle"
                          color="primary"
                          hide-details
                          @change="changeMode()"
                        />
                        <label class="overline">Dark</label>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col sm="6" cols="12">
                    <h6 class="title">Layout Direction</h6>
                    <v-row>
                      <v-col class="py-0 flex" align="start" justify="start">
                        <label class="overline">LTR</label>
                        <v-switch
                          v-model="rtl"
                          class="switch-toggle"
                          color="primary"
                          @change="changeDirection()"
                          hide-details
                        />
                        <label class="overline">
                          RTL
                          <br />
                          <i class="caption">Best view in arabic</i>
                        </label>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card>
            </div>
            <div class="theme-illustration">
              <v-card class="paper">
                <v-row>
                  <v-col sm="6" cols="12" class="py-0">
                    <h6 class="title">Theme Illustration</h6>
                  </v-col>
                  <v-col sm="6" cols="12" class="py-0">
                    <v-row>
                      <v-col class="flex pa-0" align="start" justify="start">
                        <label class="overline">2D</label>
                        <v-switch
                          v-model="ill3d"
                          class="switch-toggle"
                          color="primary"
                          @change="changeIllustration()"
                          hide-details
                        />
                        <label class="overline">
                          3D
                        </label>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card>
            </div>
            <div class="theme-color">
              <v-card class="paper">
                <h6 class="title">Color Combinations</h6>
                <v-row>
                  <v-col
                    v-for="(clr, index) in colorList"
                    :key="index"
                    sm="3"
                    cols="6"
                  >
                    <v-tooltip top>
                      <template v-slot:activator="{ on }">
                        <v-btn
                          text
                          class="swatch"
                          :class="{ active: selectedColor === clr }"
                          @click="changeColor(clr)"
                          v-on="on"
                        >
                          <span
                            class="primary-swatch"
                            :style="{
                              background: themeList[clr].primary
                            }"
                          >
                            &nbsp;
                          </span>
                          <span
                            class="secondary-swatch"
                            :style="{
                              background: themeList[clr].secondary
                            }"
                          >
                            &nbsp;
                          </span>
                          <span
                            class="accent-swatch"
                            :style="{
                              background: themeList[clr].accent
                            }"
                          >
                            &nbsp;
                          </span>
                        </v-btn>
                      </template>
                      <span>{{ clr }}</span>
                    </v-tooltip>
                  </v-col>
                </v-row>
              </v-card>
            </div>
          </v-tab-item>
          <v-tab-item>
            <div class="theme-switched">
              <v-card class="paper mb-8">
                <v-row>
                  <v-col cols="12" class="margin-bottom">
                    <h6 class="title">Header Layout</h6>
                  </v-col>
                  <v-col cols="6">
                    <a v-ripple :class="{ 'active': headerType === 'mixed' }" @click="changeHeader('mixed')" class="ly-btn mb-8">
                      <img src="/images/showcase/header_default.jpg" alt="default" />
                      Mixed
                    </a>
                    <a v-ripple :class="{ 'active': headerType === 'basic' }" @click="changeHeader('basic')" class="ly-btn mb-8">
                      <img src="/images/showcase/header_basic.jpg" alt="basic" />
                      Basic
                    </a>
                    <a v-ripple :class="{ 'active': headerType === 'search' }" @click="changeHeader('search')" class="ly-btn mb-8">
                      <img src="/images/showcase/header_search.jpg" alt="search" />
                      Search
                    </a>
                    <a v-ripple :class="{ 'active': headerType === 'navscroll' }" @click="changeHeader('navscroll')" class="ly-btn mb-8">
                      <img src="/images/showcase/header_nav.jpg" alt="nav" />
                      Scroll Nav
                    </a>
                  </v-col>
                  <v-col cols="6">
                    <a v-ripple :class="{ 'active': headerType === 'droplist' }" @click="changeHeader('droplist')" class="ly-btn">
                      <img src="/images/showcase/header_droplist.jpg" alt="droplist" />
                      Dropdown List
                    </a>
                    <a v-ripple :class="{ 'active': headerType === 'mega' }" @click="changeHeader('mega')" class="ly-btn">
                      <img src="/images/showcase/header_mega.jpg" alt="mega" />
                      Mega Menu
                    </a>
                    <a v-ripple :class="{ 'active': headerType === 'hamburger' }" @click="changeHeader('hamburger')" class="ly-btn">
                      <img src="/images/showcase/header_hamburger.jpg" alt="hamburger" />
                      Hamburger
                    </a>
                  </v-col>
                </v-row>
              </v-card>
              <v-card class="paper mb-8">
                <v-row>
                  <v-col cols="12" class="margin-bottom">
                    <h6 class="title">Footer Layout</h6>
                  </v-col>
                  <v-col cols="6">
                    <a v-ripple :class="{ 'active': footerType === 'sitemap' }" @click="changeFooter('sitemap')" class="ly-btn">
                      <img src="/images/showcase/footer_sitemap.jpg" alt="sitemap" />
                      Sitemap
                    </a>
                  </v-col>
                  <v-col cols="6">
                    <a v-ripple :class="{ 'active': footerType === 'blog' }" @click="changeFooter('blog')" class="ly-btn">
                      <img src="/images/showcase/footer_blog.jpg" alt="blog" />
                      Blog
                    </a>
                  </v-col>
                  <v-col cols="6">
                    <a v-ripple :class="{ 'active': footerType === 'basic' }" @click="changeFooter('basic')" class="ly-btn">
                      <img src="/images/showcase/footer_basic.jpg" alt="basic" />
                      Basic
                    </a>
                  </v-col>
                  <v-col cols="6">
                    <a v-ripple :class="{ 'active': footerType === 'contact' }" @click="changeFooter('contact')" class="ly-btn">
                      <img src="/images/showcase/footer_contact.jpg" alt="contact" />
                      Contact
                    </a>
                  </v-col>
                </v-row>
              </v-card>
              <v-card class="paper">
                <v-row>
                  <v-col cols="12" class="margin-bottom">
                    <h6 class="title">Bottom Corner</h6>
                  </v-col>
                  <v-col cols="6" sm="4">
                    <a v-ripple :class="{ 'active': cornerType === 'chat' }" @click="changeCorner('chat')" class="ly-btn">
                      <img src="/images/showcase/chat.jpg" alt="chat" />
                      Chat Panel
                    </a>
                  </v-col>
                  <v-col cols="6" sm="3">
                    <a v-ripple :class="{ 'active': cornerType === 'nav' }" @click="changeCorner('nav')" class="ly-btn">
                      <img src="/images/showcase/pagenav.jpg" alt="pagenav" />
                      Page Navigation
                    </a>
                  </v-col>
                </v-row>
              </v-card>
            </div>
          </v-tab-item>
          <v-tab-item>
            <div class="explore">
              <ul>
                <li>
                  <a :href="opensans + '/saas'" target="_blank">
                    <figure>
                      <img :src="imgAPI.showcase[8]" alt="saas" />
                    </figure>
                    SaaS
                  </a>
                </li>
                <li>
                  <a :href="roboto + '/agency'" target="_blank">
                    <figure>
                      <img :src="imgAPI.showcase[2]" alt="agency" />
                    </figure>
                    Agency
                  </a>
                </li>
                <li>
                  <a :href="montserrat + '/crypto'" target="_blank">
                    <figure>
                      <img :src="imgAPI.showcase[1]" alt="crypto" />
                    </figure>
                    Cryptocurrency
                  </a>
                </li>
                <li>
                  <a :href="montserrat + '/cloud'" target="_blank">
                    <figure>
                      <img :src="imgAPI.showcase[6]" alt="cloud" />
                    </figure>
                    Cloud Hosting
                  </a>
                </li>
                <li>
                  <a :href="roboto + '/education'" target="_blank">
                    <figure>
                      <img :src="imgAPI.showcase[4]" alt="education" />
                    </figure>
                    Education
                  </a>
                </li>
                <li>
                  <a :href="montserrat + '/fintech'" target="_blank">
                    <figure>
                      <img :src="imgAPI.showcase[7]" alt="fintech" />
                    </figure>
                    Fintech
                  </a>
                </li>
                <li>
                  <a :href="opensans + '/social-apps'" target="_blank">
                    <figure>
                      <img :src="imgAPI.showcase[11]" alt="socmed" />
                    </figure>
                    Social Media Apps
                  </a>
                </li>
                <li>
                  <a :href="roboto + '/marketing'" target="_blank">
                    <figure>
                      <img :src="imgAPI.showcase[3]" alt="marketing" />
                    </figure>
                    Marketing
                  </a>
                </li>
                <li>
                  <a :href="roboto + '/medical'" target="_blank">
                    <figure>
                      <img :src="imgAPI.showcase[5]" alt="medical" />
                    </figure>
                    Medical
                  </a>
                </li>
                <li>
                  <a :href="opensans + '/retail'" target="_blank">
                    <figure>
                      <img :src="imgAPI.showcase[9]" alt="retail" />
                    </figure>
                    Retail
                  </a>
                </li>
                <li>
                  <a :href="opensans + '/saas2'" target="_blank">
                    <figure>
                      <img :src="imgAPI.showcase[10]" alt="saas2" />
                    </figure>
                    Saas2
                  </a>
                </li>
                <li>
                  <a href="http://ilhammeidi.github.io/awrora-docs" target="_blank">
                    <figure>
                      <img :src="imgAPI.showcase[12]" alt="documentation" />
                    </figure>
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </v-navigation-drawer>
    <div class="btn" :class="{ active: openDrawer }">
      <v-btn icon @click="handleToggleOpenTheme()">
        <v-icon>mdi-palette-outline</v-icon>
      </v-btn>
      <v-btn icon @click="handleToggleOpenLayout()">
        <v-icon>mdi-desktop-mac-dashboard</v-icon>
      </v-btn>
      <v-btn icon @click="handleToggleOpenExplore()">
        <v-icon>mdi-text-box-multiple-outline</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './palette-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import Hidden from '../agency/Hidden'

const colorList = [
  'joker',
  'violeta',
  'purple',
  'coinz',
  'passion',
  'burgundy',
  'rose',
  'vampire',
  'sunset',
  'gold',
  'deepblue',
  'fresh',
  'mint',
  'smart',
  'ocean',
  'leaf',
  'cloud',
  'queen',
  'botani',
  'money',
  'nature',
  'brown',
  'grayscale',
  'black'
]

let darkMode = false
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('awroraDarkMode') || false
}

export default {
  components: {
    Hidden
  },
  data: () => ({
    tab: null,
    imgAPI: imgAPI,
    colorList: colorList,
    openDrawer: false,
    opensans: 'http://awrora2.indisains.com',
    roboto: 'http://awrora1.indisains.com',
    montserrat: 'http://awrora3.indisains.com',
    dark: darkMode === 'true',
    rtl: false,
    ill3d: true
  }),
  methods: {
    changeMode() {
      localStorage.setItem('awroraDarkMode', this.dark)
      this.$vuetify.theme.dark = this.dark
    },
    changeDirection() {
      this.$vuetify.rtl = this.rtl
      document.dir = this.rtl ? 'rtl' : 'ltr'
    },
    changeIllustration() {
      const img23d = document.getElementsByClassName('img-2d3d')
      for (let i = 0; i < img23d.length; i++) {
        if (this.ill3d) {
          img23d[i].setAttribute('src', img23d[i].getAttribute('data-3d'))
        } else {
          img23d[i].setAttribute('src', img23d[i].getAttribute('data-2d'))
        }
      }
    },
    changeHeader(type) {
      this.$store.commit('ui/set_header', type)
    },
    changeFooter(type) {
      this.$store.commit('ui/set_footer', type)
    },
    changeCorner(type) {
      this.$store.commit('ui/set_corner', type)
    },
    handleToggleOpenTheme() {
      this.tab = 0
      this.openDrawer = !this.openDrawer
    },
    handleToggleOpenLayout() {
      this.tab = 1
      this.openDrawer = !this.openDrawer
    },
    handleToggleOpenExplore() {
      this.tab = 2
      this.openDrawer = !this.openDrawer
    },
    handleClose() {
      this.openDrawer = false
    }
  },
  props: {
    selectedColor: {
      type: String,
      required: true
    },
    changeColor: {
      type: Function,
      required: true
    },
    themeList: {
      type: Object,
      required: true
    }
  },
  computed: {
    headerType() {
      return this.$store.state.ui.header
    },
    footerType() {
      return this.$store.state.ui.footer
    },
    cornerType() {
      return this.$store.state.ui.corner
    }
  }
}
</script>
