// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import Vuex from 'vuex'
import router from './router'
import {
  Button,
  NavBar,
  Icon,
  Popup,
  Cell,
  CellGroup,
  Image,
  Field,
  Picker,
  DatetimePicker,
  Col,
  Row,
  Panel,
  Divider,
  Toast,
  Card,
  Tag,
  PullRefresh
} from 'vant'
import 'vant/lib/index.css'
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Popup);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Image);
Vue.use(Field);
Vue.use(Picker);
Vue.use(DatetimePicker);
Vue.use(Col);
Vue.use(Row);
Vue.use(PullRefresh);
Vue.use(Panel).use(Divider).use(Toast).use(Card).use(Tag);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
