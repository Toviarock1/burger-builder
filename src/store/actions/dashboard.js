import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const dashboardGetInfoStart = () => {
	return{
		type: actionTypes.DASHBOARD_GET_INFO_START
	};
};

export const dashboardGetInfoSuccess = (info) => {
	return{
		type: actionTypes.DASHBOARD_GET_INFO_SUCCESS,
		info: info
	};
};

export const dashboardGetInfoFail = (error) => {
	return{
		type: actionTypes.DASHBOARD_GET_INFO_FAIL,
		error: error
	};
};

export const dashboardGetInfo = (token) => {
	return dispatch => {
		dispatch(dashboardGetInfoStart());
		let queryParams = '?auth=' + token;
		axios.get('/orders.json' + queryParams)
		.then(res => {
			dispatch(dashboardGetInfoSuccess(res.data));
		})
		.catch(err => {
			dispatch(dashboardGetInfoFail(err));
		})
	}
}