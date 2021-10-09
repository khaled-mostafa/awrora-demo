<template>
  <fragment>
    <v-list dense>
      <v-list-item
        v-for="(item, index) in dataMenu"
        :key="index"
        :href="singleNav ? item.link : '/' + item.link"
        link
      >
        <v-list-item-content>
          <v-list-item-title class="menu-list">
            {{ $t('education.header_'+item.name) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item href="/sample-pages" link>
        <v-list-item-content>
          <v-list-item-title class="menu-list">
            {{ $t('common.header_sample_page') }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider />
    <v-list dense>
      <v-list-item
        v-for="(item, index) in ['login', 'register']"
        :key="index"
        :href="link.education[item]"
        link
      >
        <v-list-item-content>
          <v-list-item-title class="menu-list">{{ $t('common.header_'+item) }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </fragment>
</template>

<style scoped lang="scss">
@import '../sidenav-style';
</style>

<script>
import link from '~/static/text/link'
import mega from '../data/mega'

export default {
  data() {
    return {
      link: link,
      menuList: mega,
      isOpen: false
    }
  },
  props: {
    dataMenu: {
      type: Array,
      required: true
    },
    singleNav: {
      type: Boolean,
      default: true
    }
  }
}
</script>
