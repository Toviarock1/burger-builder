import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';


class Dashboard extends Component {
	componentDidMount() {
		this.props.onGetInfo(this.props.token);
	}
	render() {
		let users = this.props.info;
		// let order;
		// for(order in this.props.info) {
		// console.log(order);
		// }
		// console.log(order)
		return (
				<div>
					<div>
						<h3>No of Orders</h3>
						
					</div>
					<div>
						<h3>No of Users</h3>
						<p>{this.props.info ? Object.keys(users).length : <Spinner />}</p>
					</div>
				</div>
			);
	};
}

const mapStateToProps = state => {
	return{
		token: state.auth.token,
		info: state.dashboard.info
	}
}

const mapDispatchToProps = dispatch => {
	return{
		onGetInfo: (token) => dispatch(actions.dashboardGetInfo(token))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);