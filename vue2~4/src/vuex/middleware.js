// 暂时保留
import Vue from 'vue';
import Vuex from 'vuex';

import createLogger from 'vuex/dist/logger';

// 加入中间件
export default process.env.NODE_ENV !== 'production'? [createLogger()]: [];
