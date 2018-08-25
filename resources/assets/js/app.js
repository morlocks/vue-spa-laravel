require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {routes} from './routes';
import StoreData from './store';
import MainApp from './components/MainApp.vue';
import {initialize} from './helpers/general';
import './icons' // icon
import i18n from './lang' // Internationalization

Vue.use(VueRouter);
Vue.use(Vuex);

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element, {
    size: 'medium', // set element-ui default size
    i18n: (key, value) => i18n.t(key, value)
  })

const store = new Vuex.Store(StoreData);

const router = new VueRouter({
    routes,
    mode: 'history'
});

initialize(store, router);

const app = new Vue({
    el: '#app',
    router,
    store,
    i18n,
    components: {
        MainApp
    }
});
