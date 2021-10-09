<template>
  <theme-wrapper theme="ocean">
    <div class="main-wrap">
      <main-header :href="link.agency.register" text="register" />
      <div class="container-general">
        <login-form />
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
import LoginForm from '~/components/agency/Forms/Login'
import ThemeWrapper from '~/components/ThemeWrapper'
import link from '~/static/text/link'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    LoginForm,
    ThemeWrapper
  },
  data() {
    return {
      link: link
    }
  },
  head() {
    return {
      title: 'Login | ' + brand.agency.desc
    }
  }
}
</script>
