<template>
  <theme-wrapper theme="ocean">
    <div class="main-wrap">
      <main-header :href="link.agency.login" text="login" />
      <div class="container-general">
        <register-form />
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
import Header from '~/components/agency/Header/Basic'
import Footer from '~/components/agency/Footer'
import ThemeWrapper from '~/components/ThemeWrapper'
import RegisterForm from '~/components/agency/Forms/Register'
import link from '~/static/text/link'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    RegisterForm,
    ThemeWrapper
  },
  data() {
    return {
      link: link
    }
  },
  head() {
    return {
      title: 'Register | ' + brand.agency.desc
    }
  }
}
</script>
