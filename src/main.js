import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入css初始化
import './assets/css/base.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/js/phone'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vant);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
