import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
	loading: false,
	info: null,
	error: null
}

const dashboardGetInfoStart = (state, action) => {
	return updateObject(state, {loading: true});
}

const dashboardGetInfoFail = (state, action) => {
	return updateObject(state, {loading: false, error: action.error});
}

const dashboardGetInfoSuccess = (state, action) => {
	return updateObject(state, {loading: false, info: action.info});
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.DASHBOARD_GET_INFO_START: return dashboardGetInfoStart(state, action);
		case actionTypes.DASHBOARD_GET_INFO_SUCCESS: return dashboardGetInfoSuccess(state, action);
		case actionTypes.DASHBOARD_GET_INFO_FAIL: return dashboardGetInfoFail(state, action);
		default: return state;
	};
}

export default reducer;