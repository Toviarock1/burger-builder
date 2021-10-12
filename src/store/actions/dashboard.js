import * as actionTypes from './actionTypes';


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
	return {
		type: actionTypes.DASHBOARD_GET_INFO,
		token: token
	}
}