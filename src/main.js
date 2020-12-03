/*
 * @Author: guwenjiang
 * @Date: 2020-12-02 10:44:43
 * @LastEditors: guwenjiang
 * @LastEditTime: 2020-12-02 16:45:14
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design' //引入iview
import 'view-design/dist/styles/iview.css' //引入iview css
import $ from 'jquery' //引入jq
import BootstrapVue from 'bootstrap-vue' //引入bootstrap
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootstrap/dist/js/bootstrap.min.js"
import echarts from "echarts" //引入echarts
import { Button, Cell, CellGroup, Image as VanImage, Loading, Col, Row, Popup, Calendar,Field } from "vant"
import 'vant/lib/index.css';
import plugins from "./plugins"
Vue.use(plugins)
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(VanImage);
Vue.use(Loading);
Vue.use(Col);
Vue.use(Row);
Vue.use(Popup);
Vue.use(Calendar);
Vue.use(Field);
Vue.prototype.$echarts = echarts //将echarts加到vue的原型上
Vue.use(BootstrapVue)

Vue.use(ViewUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    render: h => h(App),
    template: '<App/>'
})