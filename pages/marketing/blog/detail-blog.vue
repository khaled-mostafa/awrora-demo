<template>
  <theme-wrapper theme="sunset">
    <div class="main-wrap">
      <main-header />
      <div class="container-general">
        <v-container>
          <v-row>
            <v-col md="8" cols="12">
              <article-blog />
            </v-col>
            <v-col md="4" cols="12">
              <sidebar />
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div id="footer">
        <main-footer />
      </div>
    </div>
  </theme-wrapper>
</template>

<style lang="scss" scoped>
@import '~/assets/pages';
</style>

<script>
import brand from '~/static/text/brand'
import BlogHeader from '~/components/marketing/Header/BlogHeader'
import Headline from '~/components/marketing/Blog/Headline'
import PostCard from '~/components/marketing/Cards/PostCard'
import Article from '~/components/marketing/Blog/Article'
import Sidebar from '~/components/marketing/Blog/Sidebar'
import Footer from '~/components/marketing/Footer'
import ThemeWrapper from '~/components/ThemeWrapper'

export default {
  components: {
    'main-header': BlogHeader,
    'main-footer': Footer,
    Headline,
    PostCard,
    Sidebar,
    ThemeWrapper,
    'article-blog': Article
  },
  head() {
    return {
      title: 'Blog Detail | ' + brand.marketing.desc
    }
  }
}
</script>
