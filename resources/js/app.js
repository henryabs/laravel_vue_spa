require('./bootstrap');
window.Vue = require('vue').default;
import Index from './Index.vue';
import router from './routes';
import VueRouter from 'vue-router';
import moment from 'moment';
import Vue from 'vue';
import StarRating from './shared/components/StarRating';
Vue.filter("fromNow", value => moment(value).fromNow());
Vue.use(VueRouter);
Vue.component('star-rating', StarRating);
const app = new Vue({
    el: '#app',
    router,
    components: {
       index: Index
    },
});
