<template>
  <AuthFrame
    :title="$t('common.login_subtitle')"
    :subtitle="$t('common.auth_desc')"
    type="login"
  >
    <div>
      <div class="head">
        <h3 :class="isMobile ? 'use-text-title use-text-primary' : 'use-text-subtitle'">
          {{ $t('common.login_title') }}
        </h3>
      </div>
      <social-auth />
      <div class="separator">
        <p>
          {{ $t('common.login_or') }}
        </p>
      </div>
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-row class="spacing3">
          <v-col cols="12" sm="12" class="px-3 py-0">
            <v-text-field
              v-model="email"
              :label="$t('common.login_email')"
              :rules="emailRules"
              name="email"
              required
              color="primary"
              filled
              class="input-field"
            />
          </v-col>
          <v-col cols="12" sm="12" class="px-3 py-0">
            <v-text-field
              v-model="password"
              :label="$t('common.login_password')"
              :rules="requiredRules"
              type="password"
              name="email"
              required
              color="primary"
              filled
              class="input-field"
            />
          </v-col>
        </v-row>
        <div class="form-helper">
          <div class="form-control-label">
            <v-checkbox
              v-model="checkbox"
              :label="$t('common.login_remember')"
              color="primary"
            />
          </div>
          <v-btn
            small
            class="button-link"
            text
            href="#"
          >
            {{ $t('common.login_forgot') }}
          </v-btn>
        </div>
        <div class="btn-area">
          <v-btn
            large
            block
            color="primary"
            @click="handleSubmit"
          >
            {{ $t('common.continue') }}
          </v-btn>
        </div>
      </v-form>
    </div>
  </AuthFrame>
</template>

<style lang="scss" scoped>
@import './form-style';
</style>

<script>
import SocialAuth from './SocialAuth'
import AuthFrame from './AuthFrame'

export default {
  components: {
    SocialAuth,
    AuthFrame
  },
  data() {
    return {
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      requiredRules: [v => !!v || 'This field is required'],
      checkbox: false
    }
  },
  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        console.log('data submited')
      }
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
