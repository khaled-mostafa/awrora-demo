<template>
  <div class="page-wrap">
    <v-snackbar
      :timeout="4000"
      top
      right
      v-model="snackbar"
      class="notification"
    >
      <div class="action">
        Message Sent
      </div>
      <v-btn
        text
        icon
        @click="snackbar = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-container class="inner-wrap max-md">
      <div class="full-form-wrap">
        <div class="text-center">
          <title-main
            :head="$t('common.contact_title2')"
            :desc="$t('common.contact_subtitle')"
            align="center"
            color="primary"
          />
        </div>
        <div class="form">
          <v-form
            ref="form"
            v-model="valid"
          >
            <v-row class="spacing6">
              <v-col cols="12" sm="6" class="px-6 py-0">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  :label="$t('common.form_name')"
                  class="input-field"
                  color="secondary"
                  filled
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" class="px-6 py-0">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  :label="$t('common.form_email')"
                  class="input-field"
                  color="secondary"
                  filled
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" class="px-6 py-0">
                <v-text-field
                  v-model="phone"
                  :label="$t('common.form_phone')"
                  class="input-field"
                  color="secondary"
                  filled
                />
              </v-col>
              <v-col cols="12" sm="6" class="px-6 py-0">
                <v-text-field
                  v-model="company"
                  :label="$t('common.form_company')"
                  class="input-field"
                  color="secondary"
                  filled
                />
              </v-col>
              <v-col cols="12" class="px-6 py-0">
                <v-textarea
                  v-model="message"
                  :label="$t('common.form_message')"
                  rows="6"
                  class="input-field"
                  color="secondary"
                  filled
                />
              </v-col>
            </v-row>
            <div class="btn-area">
              <div class="form-control-label">
                <v-checkbox
                  v-model="checkbox"
                  color="primary"
                  :rules="[v => !!v || 'You must agree to continue!']"
                  :label="$t('common.form_terms')"
                  required
                />
                <span>
                  <a href="#" class="link">
                    {{ $t('common.form_privacy') }}
                  </a>
                </span>
              </div>
              <v-btn
                :block="isMobile"
                color="primary"
                @click="validate"
                large
              >
                {{ $t('common.form_send') }}
              </v-btn>
            </div>
          </v-form>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './form-style.scss';
</style>

<script>
import logo from '~/static/images/education-logo.svg'
import brand from '~/static/text/brand'
import link from '~/static/text/link'
import Title from '../Title'
import Hidden from '../Hidden'

export default {
  components: {
    Hidden,
    'title-main': Title
  },
  data() {
    return {
      valid: true,
      snackbar: false,
      name: '',
      nameRules: [v => !!v || 'Name is required'],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      phone: '',
      company: '',
      message: '',
      checkbox: false,
      logo: logo,
      brand: brand,
      routeLink: link
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    }
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
