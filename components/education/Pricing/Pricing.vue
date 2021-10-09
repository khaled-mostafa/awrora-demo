<template>
  <v-container>
    <title-main
      :head="$t('common.pricing_title')"
      :desc="$t('common.pricing_desc')"
      align="center"
      color="primary"
    />
    <div class="pricing-wrap">
      <v-row align="center">
        <v-col
          v-for="(tier, index) in tiers"
          :key="index"
          md="3"
          sm="6"
          cols="12"
          class="px-md-0 px-6"
        >
          <pricing-card
            :title="tier.title"
            :subheader="tier.subheader"
            :price="tier.price"
            :description="tier.description"
            :info="tier.info"
            :button-text="tier.buttonText"
            :button-variant="tier.buttonVariant"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
@import './pricing-style';
</style>

<script>
import PricingCard from '../Cards/PricingCard'
import Title from '../Title'

export default {
  components: {
    'title-main': Title,
    PricingCard
  },
  data() {
    return {
      tiers: [
        {
          title: 'Free',
          price: '0',
          description: [
            '15 users included',
            '10 GB of storage',
            'Help center access'
          ],
          info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
          buttonText: 'pricing_free',
          buttonVariant: 'outlined'
        },
        {
          title: 'Personal',
          price: '5',
          description: [
            '15 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support'
          ],
          info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
          buttonText: 'pricing_buy',
          buttonVariant: 'outlined'
        },
        {
          title: 'Pro',
          subheader: 'Most popular',
          price: '15',
          description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support'
          ],
          info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
          buttonText: 'pricing_buy',
          buttonVariant: 'contained'
        },
        {
          title: 'Enterprise',
          price: '30',
          description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Priority email support',
            'Phone & email support'
          ],
          info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
          buttonText: 'btn_contact',
          buttonVariant: 'outlined'
        }
      ]
    }
  }
}
</script>
