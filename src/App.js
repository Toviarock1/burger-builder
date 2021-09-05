import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import * as actions from './store/actions/index';
import Spinner from './components/UI/Spinner/Spinner';
import Dashboard from './containers/Dashboard/Dashboard';

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render () {

    const Auth = lazy(() => import('./containers/Auth/Auth'));
    const BurgerBuilder = lazy(() => import('./containers/BurgerBuilder/BurgerBuilder'));
    const Checkout = lazy(() => import('./containers/Checkout/Checkout'));
    const Orders = lazy(() => import('./containers/Orders/Orders'));
    const Logout = lazy(() => import('./containers/Auth/Logout/Logout'));


    let routes = (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    );

    if ( this.props.isAuthenticated ) {
      routes = (
        <Suspense fallback={<Spinner />}>
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" component={Orders} />
              <Route path="/logout" component={Logout} />
              <Route path="/" exact component={BurgerBuilder} />
              <Redirect to={this.props.authRedirectPath} />
            </Switch>
        </Suspense>
      );

      if(this.props.isAdmin) {
        routes = (
        <Suspense fallback={<Spinner />}>
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" component={Orders} />
              <Route path="/logout" component={Logout} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/" exact component={BurgerBuilder} />
              <Redirect to={this.props.authRedirectPath} />
            </Switch>
        </Suspense>
      );
      }
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath,
    isAdmin: state.auth.admin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
