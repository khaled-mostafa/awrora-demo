<template>
  <theme-wrapper theme="fresh">
    <div class="main-wrap">
      <main-header />
      <div class="container-general container-front">
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
import Header from '~/components/medical/Header'
import SiteMap from '~/components/medical/Footer'
import Contact from '~/components/medical/Forms/Contact'
import ThemeWrapper from '~/components/ThemeWrapper'

export default {
  components: {
    'main-header': Header,
    'main-footer': SiteMap,
    Contact,
    ThemeWrapper
  },
  head() {
    return {
      title: 'Contact | ' + brand.medical.desc
    }
  }
}
</script>
