import Buefy from 'buefy'
import 'buefy/dist/buefy.css';
import '~/theme.scss';
import '@fontsource/roboto';
import DefaultLayout from './layouts/DefaultLayout';

export default function (Vue, { router, head, isClient }) {
  Vue.use(Buefy);
  Vue.component('Layout', DefaultLayout);
}
