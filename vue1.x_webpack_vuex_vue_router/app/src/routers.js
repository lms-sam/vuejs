import {DEFAULT_ROOMID} from './config';
export default function (router) {
    router.map({
        '/' : {
            name : 'home' ,
            component : function (resolve) {
                require.ensure(['./component/home.vue'],function () {
                    require(['./component/home.vue'],resolve);
                },'home');
            }
        },
        '/user/:uid' : {
            name : 'user' ,
            component : function (resolve) {
                require.ensure(['./component/user.vue'],function () {
                    require(['./component/user.vue'],resolve);
                },'user');
            }
        },
        '/user/login' : {
            name : 'login' ,
            component : function (resolve) {
                require.ensure(['./component/user/login.vue'],function () {
                    require(['./component/user/login.vue'],resolve);
                },'login');
            }
        }
    });
    router.redirect({
        '*': '/'
    });
}