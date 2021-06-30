require('./bootstrap');
window.Vue = require('vue').default;
import Index from './Index.vue';
import router from './routes';
import VueRouter from 'vue-router';
import moment from 'moment';
import Vue from 'vue';
Vue.filter("fromNow", value => moment(value).fromNow());
Vue.use(VueRouter);
const app = new Vue({
    el: '#app',
    router,
    components: {
       index: Index
    },
});
