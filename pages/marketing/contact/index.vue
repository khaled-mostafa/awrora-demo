<template>
  <theme-wrapper theme="sunset">
    <div class="main-wrap">
      <main-header />
      <div class="container-general">
        <contact />
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
import SiteMap from '~/components/marketing/Footer'
import Contact from '~/components/marketing/Forms/Contact'
import ThemeWrapper from '~/components/ThemeWrapper'

export default {
  components: {
    'main-header': Header,
    'main-footer': SiteMap,
    ThemeWrapper,
    Contact
  },
  head() {
    return {
      title: 'Contact | ' + brand.marketing.desc
    }
  }
}
</script>
