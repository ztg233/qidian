import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '../src/assets/js/router.js'



Vue.config.productionTip = false
Vue.use(VueRouter)

import 'vant/lib/index.css';
import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Search } from 'vant';
import { CountDown } from 'vant';
import { TreeSelect } from 'vant';

Vue.use(TreeSelect);
Vue.use(CountDown);
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);


new Vue({
  router:router,
  data() {
    return {
      time:1000,
    };
  },
  render: h => h(App),
}).$mount('#app')
