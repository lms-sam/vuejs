// import {DEFAULT_ROOMID} from './config';
//
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
}
];
export default routers;
