<template>
  <theme-wrapper theme="smart">
    <div class="main-wrap">
      <main-header :href="link.education.login" text="login" />
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
import Header from '~/components/education/Header/Basic'
import Footer from '~/components/education/Footer'
import RegisterForm from '~/components/education/Forms/Register'
import ThemeWrapper from '~/components/ThemeWrapper'
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
      title: 'Register | ' + brand.education.desc
    }
  }
}
</script>
