import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "./../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";
import Order from "./../../components/Order/Order";
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";

const Dashboard = (props) => {
  let users = <Spinner />;
  let ordersNum = <Spinner />;
  let order = <Spinner />;
  const { onGetInfo, onGetORders, token, userId } = props;

  useEffect(() => {
    onGetInfo(token);
    onGetORders(token, userId);
  }, [onGetInfo, onGetORders, token, userId]);

  const getObjectLength = (obj) => {
    let size = 0, key;
    for(key in obj) {
      if(obj.hasOwnProperty(key)) size++ ;
    }
    return size
  }


  const deleteOrderHandler = (userId, order, route, token) => {
    axios
      .delete(`users/${userId}/orders/${route}.json?auth=${token}`, order)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!props.loading) {
    users = <p>{getObjectLength(props.info)}</p>;
    ordersNum = <p>{props.orders.length}</p>;
    order = props.orders.map((order) => {
      return (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price}
          click={() =>
            deleteOrderHandler(order.userId, order, order.id, props.token)
          }
        />
      );
    });
  }

  return (
    <div>
      <div>
        <h3>No of Orders</h3>
        {ordersNum}
      </div>
      <div>
        <h3>No of Users</h3>
        {users}
      </div>
      {order}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
    info: state.dashboard.info,
    orders: state.order.orders,
    loading: state.dashboard.loading,
    error: state.dashboard.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetInfo: (token) => dispatch(actions.dashboardGetInfo(token)),
    onGetORders: (token, userId) =>
      dispatch(actions.fetchOrders(token, userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Dashboard, axios));
