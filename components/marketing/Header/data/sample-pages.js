import imgAPI from '~/static/images/imgAPI';
import link from '~/static/text/link';

const sample = [
  {
    name: 'company',
    thumb: imgAPI.ui[3],
    child: [
      {
        name: 'about',
        link: link.marketing.about
      },
      {
        name: 'team',
        link: link.marketing.team
      },
      {
        name: 'blog',
        link: link.marketing.blog
      },
      {
        name: 'blog detail',
        link: link.marketing.blogDetail
      }
    ],
  },
  {
    name: 'Form',
    thumb: imgAPI.ui[1],
    child: [
      {
        name: 'login',
        link: link.marketing.login
      },
      {
        name: 'register',
        link: link.marketing.register
      },
      {
        name: 'contact',
        link: link.marketing.contact
      },
      {
        name: 'contact map',
        link: link.marketing.contactMap
      }
    ],
  },
  {
    name: 'items',
    thumb: imgAPI.ui[0],
    child: [
      {
        name: 'card',
        link: link.marketing.card
      },
      {
        name: 'product',
        link: link.marketing.product
      },
      {
        name: 'product detail',
        link: link.marketing.productDetail
      }
    ],
  },
  {
    name: 'utilities',
    thumb: imgAPI.ui[2],
    child: [
      {
        name: 'pricing',
        link: link.marketing.pricing
      },
      {
        name: 'faq',
        link: link.marketing.faq
      },
      {
        name: 'maintenance',
        link: link.marketing.maintenance
      },
      {
        name: 'coming soon',
        link: link.marketing.comingSoon
      },
      {
        name: 'error',
        link: '/error'
      }
    ]
  }
]

export default sample
