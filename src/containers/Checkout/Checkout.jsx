import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import CheckoutSummary from './../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

const Checkout = (props) => {


	/*componentWillMount() {
		const query = new URLSearchParams(props.location.search);
		const ingredients = {};
        let price = 0;
		for (let param of query.entries()){
			//['salad', '1']
            if (param[0] === 'price') {
                price = param[1];
            } else {
			 ingredients[param[0]] = +param[1];
            }
		}
		console.log(ingredients);
		setState({ingredients: ingredients, totalPrice: price});
	}*/

	

	const checkoutCancelledHandler = () => {
		props.history.goBack();
	}

	const checkoutContinueHandler = () => {
		props.history.replace('/checkout/contact-data');
	}

		let summary = <Redirect to='/' />;
		if(props.ings) {
			const purchasedRedirect = props.purchased ? <Redirect to='/' /> : null; 
			summary =(
				<div>
					{purchasedRedirect}
					<CheckoutSummary 
					ingredients={props.ings}
					oncheckoutCancelled={checkoutCancelledHandler}
					oncheckoutContinued={checkoutContinueHandler} />

					<Route path={props.match.path + '/contact-data'} component={ContactData} />
				</div>
			);
		}
		return summary;
}

const mapStateToProps = state => {
	return{
		ings: state.burgerBuilder.ingredients,
		purchased: state.order.purchased
	};
};


export default connect( mapStateToProps )(Checkout);