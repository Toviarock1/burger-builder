import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "./../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";
import Order from "./../../components/Order/Order";
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";

class Dashboard extends Component {
  componentDidMount() {
    this.props.onGetInfo(this.props.token);
    this.props.onGetORders(this.props.token, this.props.userId);
  }
  deleteOrderHandler = (userId, order, route, token) => {
    axios
      .delete(`users/${userId}/orders/${route}.json?auth=${token}`, order)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    let users = <Spinner />;
    let ordersNum = <Spinner />;
    let order = <Spinner />;
    if (!this.props.loading) {
      users = Object.keys(this.props.orders).length;
      ordersNum = this.props.orders.length;
      order = this.props.orders.map((order) => {
        return (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={+order.price}
            click={() =>
              this.deleteOrderHandler(
                order.userId,
                order,
                order.id,
                this.props.token
              )
            }
          />
        );
      });
	}
    // let order;
    // for(order in this.props.info) {
    // console.log(order);
    // }
    // console.log(order)
    return (
      <div>
        <div>
          <h3>No of Orders</h3>
          <p>{ordersNum}</p>
        </div>
        <div>
          <h3>No of Users</h3>
          <p>{users}</p>
        </div>
        {order}
      </div>
    );
  }
}

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
