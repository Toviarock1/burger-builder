import { put } from "@redux-saga/core/effects";
import axios from "./../../axios-orders";

import * as actions from "./../actions";

export function* purchaseBurgerSaga(action) {
  yield put(actions.purchaseBurgerStart());
  try {
    const response = yield axios.post(
      `/users/${action.userId}/orders.json?auth=${action.token}`,
      action.orderData
    );
    yield put(actions.purchaseBurgerSuccess(response.data.name, action.orderData));
  } catch (error) {
    yield put(actions.purchaseBurgerFail(error));
  }
}

export function* fetchedOrders(action) {
    yield put(actions.fetchOrdersStart());
        if (action.userId === 'FTqOeABFGsN0X9nQ5l5tRyrvaou2') {
            try{
                const res = yield axios.get(`/users.json?auth=${action.token}`);
                const fetchedOrdersStart = [];
                const fetchedOrdersEnd = [];
                for (const key in res.data) {
                    for (const key2 in res.data[key]) {
                        fetchedOrdersStart.push({
                            ...res.data[key][key2]
                        });
                    }
                }
                
                fetchedOrdersStart.map(orders => {
                    for (const key in orders) {
                        fetchedOrdersEnd.push({...orders[key], id: key})
                    }
                })
                yield put(actions.fetchOrdersSuccess(fetchedOrdersEnd));
            
            } catch(error) {
                yield put(actions.fetchOrdersFail(error));
            }
            
        } else {
            try{
                const res = yield axios.get(`/users/${action.serId}/orders.json?auth=${action.token}`);

                    const fetchedOrders = [];
                    for (let key in res.data) {
                        fetchedOrders.push({
                            ...res.data[key],
                            id: key
                        });
                    }
                    yield put(actions.fetchOrdersSuccess(fetchedOrders));
                
            } catch(error) {
                yield put(actions.fetchOrdersFail(error));
            }
            
        }
}
