import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

import {apiRoot,apiRoot2} from '../api/apiRoot.js';


Vue.http.interceptors.push(function(request, next) {
	// ...
	// 请求发送前的处理逻辑
	(request.method === 'GET') && (request.method = 'JSONP');
	// ...
	next(function(response) {
		// ...
		// 请求发送后的处理逻辑
		// ...
		// 根据请求的状态，response参数会返回给successCallback或errorCallback
		return response;
	})
});

export const homeResource = () => Vue.resource(apiRoot2() + '/video/{port}.json');
