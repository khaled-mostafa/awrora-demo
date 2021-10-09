<template>
  <div class="main-wrap ocean ocean-var">
    <Error
      :err-code="this.error.statusCode"
      :text="$t('common.404')"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/pages';
</style>

<script>
import brand from '~/static/text/brand'
import Error from '../components/agency/Error'

export default {
  components: {
    Error
  },
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404
        ? brand.agency.name + ' - ' + this.pageNotFound
        : brand.agency.name + ' - ' + this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: 'Not Found',
      otherError: 'An error occurred'
    }
  }
}
</script>
