import Vue from 'vue';
import Router, { NavigationGuardNext, Route } from 'vue-router';
import { isAuthenticated, logout } from '@helpers/fake-auth';
import Login from '../3-presentation/views/Login.vue';
import Internal from '../3-presentation/views/Internal.vue';
import EmailList from '../3-presentation/views/EmailList.vue';
import EmailEmpty from '../3-presentation/views/EmailEmpty.vue';
import Email from '../3-presentation/views/Email.vue';
import SettingList from '../3-presentation/views/SettingList.vue';
import Setting from '../3-presentation/views/Setting.vue';
import Error from '../3-presentation/views/Error.vue';

Vue.use(Router);

export enum RouteName {
    ROOT = 'root',
    LOGOUT = 'logout',
    LOGIN = 'root',
    INBOX = 'inbox',
    EMAIL = 'email',
    SETTINGS = 'settings',
    ERROR = 'error',
}

export type RouteNameType = typeof RouteName;

const routes = [
    {
        name: RouteName.ROOT,
        path: '/',
        alias: '/login',
        component: Login
    },
    {
        name: RouteName.LOGOUT,
        path: '/logout',
        beforeEnter: (to: Route, from: Route, next: NavigationGuardNext): void => {
            logout();
            next({ name: RouteName.LOGIN });
        }
    },
    {
        path: '/in',
        redirect: '/in/emails',
        component: Internal,
        meta: {
            protected: true,
        },
        children: [
            {
                name: RouteName.INBOX,
                path: 'emails',
                components: {
                    default: EmailEmpty,
                    sidebar: EmailList,
                },
            },
            {
                name: RouteName.EMAIL,
                path: 'emails/:id',
                components: {
                    default: Email,
                    sidebar: EmailList,
                },
                props: {
                    default: (route: Route) => ({ emailId: route.params.id }),
                    sidebar: false,
                },
            },
            {
                name: RouteName.SETTINGS,
                path: 'settings',
                components: {
                    default: Setting,
                    sidebar: SettingList,
                },
            },
        ],
    },
    {
        name: RouteName.ERROR,
        path: '/*',
        component: Error,
        props: () => ({ code: 404 }),
    },
]

export const router = new Router({
    routes,

    /**
     * to enable html5 history mode
     * uncomment the 2 lines below
     */
    // mode: 'history',
    // base: '/code/05/',
});

router.beforeEach((to: Route, from: Route, next: NavigationGuardNext): void => {
    const isProtected = to.matched.some(record => record.meta.protected);

    if (!isProtected) {
        next();
        return;
    }

    if (isAuthenticated()) {
        next();
        return;
    }

    next({
        name: RouteName.LOGIN,
        query: { redirect: to.fullPath }
    })
})
