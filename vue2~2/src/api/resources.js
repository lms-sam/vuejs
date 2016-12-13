import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT, DEVICE_INFO, ACCESS_TOKEN} from '../config'

Vue.use(VueResource);

Vue.http.interceptors.push((request, next) => {
	//发送请求前的处理

	//将GET请求更改为JSONP请求
	(request.method === 'GET') && (request.method = 'JSONP');

	//所有请求的参数加上deviceinfo
	Object.assign(request.params, DEVICE_INFO);

	if(typeof ACCESS_TOKEN !== 'undefined') {
		Object.assign(request.params, {
			access_token: 'web-' + ACCESS_TOKEN
		});
	}
	next((response) => {
		//接受响应后执行回调前的处理
		// console.log(response);
	});
});
export const homeListResource = () => Vue.resource(API_ROOT + '/video/{port}.json');
