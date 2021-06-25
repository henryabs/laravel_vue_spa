import VueRouter from 'vue-router';
import Bookables from './bookables/Bookables'
import BookableListItem from './bookables/BookableListItem'
import Bookable from './bookable/Bookable';
const routes = [
    {
        path: '/',
        component: Bookables,
        name: 'bookables'
    },
    {
        path: '/bookable/:id',
        component: Bookable,
        name: 'bookable'
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;