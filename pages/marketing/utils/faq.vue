<template>
  <theme-wrapper theme="sunset">
    <div class="main-wrap">
      <main-header />
      <div class="container-wrap">
        <search v-model="keyword" />
        <v-container class="container-general space-top-short">
          <v-row justify="center">
            <v-col class="px-6" md="6" cols="12">
              <faq-list />
            </v-col>
            <v-col class="px-6" md="4" cols="12">
              <div class="space-bottom-short">
                <topic-list />
              </div>
              <div class="space-bottom-short">
                <help-widget />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <main-footer />
    </div>
  </theme-wrapper>
</template>

<style scoped lang="scss">
@import '~/assets/pages';
</style>

<script>
import brand from '~/static/text/brand'
import Header from '~/components/marketing/Header'
import Footer from '~/components/marketing/Footer'
import Search from '~/components/marketing/Filter/Search'
import FaqList from '~/components/marketing/Faq/FaqList'
import TopicList from '~/components/marketing/Faq/TopicList'
import HelpWidget from '~/components/marketing/List/Sidebar/HelpWidget'
import ThemeWrapper from '~/components/ThemeWrapper'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Search,
    FaqList,
    TopicList,
    HelpWidget,
    ThemeWrapper
  },
  data() {
    return {
      keyword: ''
    }
  },
  head() {
    return {
      title: brand.marketing.name + ' - Faq'
    }
  }
}
</script>
