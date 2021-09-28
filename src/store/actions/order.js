import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const purchaseBurger = (orderData, userId, token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post(`/users/${userId}/orders.json?auth=${token}`, orderData)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data.name, orderData));
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error));
            });
        // dispatch( purchaseBurgerStart() );
        // axios.post( '/orders.json?auth=' + token, orderData )
        //     .then( response => {
        //         dispatch( purchaseBurgerSuccess( response.data.name, orderData ) );
        //     } )
        //     .catch( error => {
        //         dispatch( purchaseBurgerFail( error ) );
        //     } );
    };
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        // let queryParams;
        if (userId === 'FTqOeABFGsN0X9nQ5l5tRyrvaou2') {
            axios.get(`/users.json?auth=${token}`)
                .then(res => {
                    console.log(res);
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
                    dispatch(fetchOrdersSuccess(fetchedOrdersEnd));
                })
                .catch(err => {
                    dispatch(fetchOrdersFail(err));
                });
        } else {
            axios.get(`/users/${userId}/orders.json?auth=${token}`)
                .then(res => {
                    console.log(res);
                    const fetchedOrders = [];
                    for (let key in res.data) {
                        fetchedOrders.push({
                            ...res.data[key],
                            id: key
                        });
                    }
                    dispatch(fetchOrdersSuccess(fetchedOrders));
                })
                .catch(err => {
                    dispatch(fetchOrdersFail(err));
                });
        }

        // let queryParams;
        // if(userId === 'FTqOeABFGsN0X9nQ5l5tRyrvaou2') {
        //     queryParams = '?auth=' + token;
        // }else {
        //     queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        // }

        // axios.get( '/orders.json' + queryParams)
        //     .then( res => {
        //         console.log(res);
        //         const fetchedOrders = [];
        //         for ( let key in res.data ) {
        //             fetchedOrders.push( {
        //                 ...res.data[key],
        //                 id: key
        //             } );
        //         }
        //         dispatch(fetchOrdersSuccess(fetchedOrders));
        //     } )
        //     .catch( err => {
        //         dispatch(fetchOrdersFail(err));
        //     } );
    };
};