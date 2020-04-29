// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import $ from 'jquery'
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootstrap/dist/js/bootstrap.min.js"
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