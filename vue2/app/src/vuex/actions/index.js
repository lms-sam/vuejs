import api from '../../api/index';
import * as types from '../mutation-types'
export const gethomeListDetail = ({dispatch}, params) => {
	api.gethomeListDetail(params).then((response) => {
		if(response.data.msg === "SUCCESS") {
				dispatch('test', response.data); //更改webim群id
		} else {
		// 	// dispatch(types.RECEIVE_ROOMDETAILSUCCESS, false);
		}
	});
}