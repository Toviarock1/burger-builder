import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from './../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';
import Order from './../../components/Order/Order';


class Dashboard extends Component {
	componentDidMount() {
		this.props.onGetInfo(this.props.token);
		this.props.onGetORders(this.props.token, this.props.userId);
	}
	deleteOrderHandler = (userId, order, route, token) => {
		axios.delete(`users/${userId}/orders/${route}.json?auth=${token}`, order)
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err)
			})
	}
	render() {
		let users = this.props.info;
		let orders = this.props.orders;
		// let order;
		// for(order in this.props.info) {
		// console.log(order);
		// }
		// console.log(order)
		return (
			<div>
				<div>
					<h3>No of Orders</h3>
					<p>{orders ? orders.length : <Spinner />}</p>
				</div>
				<div>
					<h3>No of Users</h3>
					<p>{users ? Object.keys(users).length : <Spinner />}</p>
				</div>
				{
					orders.map(order => {
						return <Order key={order.id}
							ingredients={order.ingredients}
							price={+order.price}
							click={() => this.deleteOrderHandler(order.userId, order, order.id, this.props.token)}
						/>;
					})
				}
			</div>
		);
	};
}

const mapStateToProps = state => {
	return {
		token: state.auth.token,
		userId: state.auth.userId,
		info: state.dashboard.info,
		orders: state.order.orders
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onGetInfo: (token) => dispatch(actions.dashboardGetInfo(token)),
		onGetORders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);