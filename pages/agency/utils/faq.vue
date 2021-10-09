<template>
  <theme-wrapper theme="ocean">
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
import Header from '~/components/agency/Header'
import Footer from '~/components/agency/Footer'
import Search from '~/components/agency/Filter/Search'
import FaqList from '~/components/agency/Faq/FaqList'
import TopicList from '~/components/agency/Faq/TopicList'
import HelpWidget from '~/components/agency/List/Sidebar/HelpWidget'
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
      title: brand.agency.name + ' - Faq'
    }
  }
}
</script>
