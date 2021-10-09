<template>
  <theme-wrapper theme="smart">
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
import Header from '~/components/education/Header'
import SiteMap from '~/components/education/Footer'
import Contact from '~/components/education/Forms/Contact'
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
      title: 'Contact | ' + brand.education.desc
    }
  }
}
</script>
