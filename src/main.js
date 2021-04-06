import Buefy from 'buefy'
import 'buefy/dist/buefy.css';
import '~/theme.scss';
import '@fontsource/roboto';
import DefaultLayout from './layouts/DefaultLayout';
import VueAnalytics from 'vue-analytics';

export default function (Vue, { router, head, isClient }) {
  Vue.use(Buefy);
  Vue.component('DefaultLayout', DefaultLayout);
  Vue.use(VueAnalytics, {
    id: 'UA-173630600-2',
    set: [
      { field: 'anonymizeIp', value: true }
    ]
  })
}
