import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Landing
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
        //route protection
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/password-reset',
        name: 'reset',
        component: () => import(/* webpackChunkName: "reset" */ '../views/ResetPass.vue'),
        //route protection
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: () => import(/* webpackChunkName: "welcome" */ '../views/Welcome.vue'),
        //route  protetcion
        meta: {
            requiresAuth: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach(( to, from, next ) => {
    if(to.matched.some(rec => rec.meta.requiresAuth)) {
        if(!store.getters.isLogged) {
            //user is redirected to login page
            next('/login');
        } else {
            next()
        }
    } else if (to.matched.some(rec => rec.meta.requiresGuest)) {
        if(store.getters.isLogged) {
            // user is redirected to the welcome page
            next('/welcome');
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router