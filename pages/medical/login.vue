<template>
  <theme-wrapper theme="fresh">
    <div class="main-wrap">
      <main-header :href="link.medical.register" text="register" />
      <div class="container-general container-front">
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
import Header from '~/components/medical/Header/Basic'
import Footer from '~/components/medical/Footer'
import LoginForm from '~/components/medical/Forms/Login'
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
      title: 'Login | ' + brand.medical.desc
    }
  }
}
</script>
