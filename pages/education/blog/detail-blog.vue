<template>
  <theme-wrapper theme="smart">
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
      <div id="footer" class="mt-10">
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
import BlogHeader from '~/components/education/Header/BlogHeader'
import Headline from '~/components/education/Blog/Headline'
import PostCard from '~/components/education/Cards/PostCard'
import Article from '~/components/education/Blog/Article'
import Sidebar from '~/components/education/Blog/Sidebar'
import Footer from '~/components/education/Footer'
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
      title: 'Blog Detail | ' + brand.education.desc
    }
  }
}
</script>
