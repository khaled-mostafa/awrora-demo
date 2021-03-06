import imgAPI from '~/static/images/imgAPI';
import link from '~/static/text/link';

const sample = [
  {
    name: 'company',
    thumb: imgAPI.ui[3],
    child: [
      {
        name: 'about',
        link: link.education.about
      },
      {
        name: 'team',
        link: link.education.team
      },
      {
        name: 'blog',
        link: link.education.blog
      },
      {
        name: 'blog detail',
        link: link.education.blogDetail
      }
    ],
  },
  {
    name: 'Form',
    thumb: imgAPI.ui[1],
    child: [
      {
        name: 'login',
        link: link.education.login
      },
      {
        name: 'register',
        link: link.education.register
      },
      {
        name: 'contact',
        link: link.education.contact
      },
      {
        name: 'contact map',
        link: link.education.contactMap
      }
    ],
  },
  {
    name: 'items',
    thumb: imgAPI.ui[0],
    child: [
      {
        name: 'card',
        link: link.education.card
      },
      {
        name: 'product',
        link: link.education.product
      },
      {
        name: 'product detail',
        link: link.education.productDetail
      }
    ],
  },
  {
    name: 'utilities',
    thumb: imgAPI.ui[2],
    child: [
      {
        name: 'pricing',
        link: link.education.pricing
      },
      {
        name: 'faq',
        link: link.education.faq
      },
      {
        name: 'maintenance',
        link: link.education.maintenance
      },
      {
        name: 'coming soon',
        link: link.education.comingSoon
      },
      {
        name: 'error',
        link: '/error'
      }
    ]
  }
]

export default sample
