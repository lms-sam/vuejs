// import {DEFAULT_ROOMID} from './config';
//
import NotFound from './component/404.vue'
const routers = [
{
    path: '/first',
    component: resolve => {
        require.ensure(['./component/firstcomponent.vue'], () => {
            resolve(require('./component/firstcomponent.vue'))
        })
    }
},
{
    path: '/second',
    component: function(resolve) {
        require.ensure('./component/secondcomponent.vue', function() {
            require(['./component/secondcomponent.vue'], resolve);
        }, 'second');
    }
},{
    path:'*',
    component : NotFound
}
];
export default routers;
