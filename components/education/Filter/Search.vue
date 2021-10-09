<template>
  <hero-banner>
    <section class="search-banner">
      <v-container class="max-md">
        <v-row align="center" class="search-block">
          <v-col sm="12">
            <title-main
              :head="$t('common.list_title')"
              :desc="$t('common.list_subtitle')"
              align="center"
              color="secondary"
            />
            <div class="search">
              <v-text-field
                :placeholder="$t('common.list_search')"
                :value="value"
                :height="56"
                outlined
                color="primary"
                single-line
                @input="(e) => updateValue(e)"
              />
              <v-icon class="search-icon">mdi-magnify</v-icon>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>  
  </hero-banner>
</template>

<style scoped lang="scss">
@import './filter';
</style>

<script>
import HeroBanner from '../HeroBanner'
import Title from '../Title'

export default {
  components: {
    'title-main': Title,
    HeroBanner
  },
  methods: {
    updateValue: function(value) {
      this.$emit('input', value)
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>
