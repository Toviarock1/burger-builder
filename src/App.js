import React, { Suspense, lazy, useEffect } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/Layout/Layout";
import * as actions from "./store/actions/index";
import Spinner from "./components/UI/Spinner/Spinner";
import Dashboard from "./containers/Dashboard/Dashboard";

const App = (props) => {
  const { onTryAutoSignup } = props;
  const Auth = lazy(() => import("./containers/Auth/Auth"));
  const BurgerBuilder = lazy(() =>
    import("./containers/BurgerBuilder/BurgerBuilder")
  );
  const Checkout = lazy(() => import("./containers/Checkout/Checkout"));
  const Orders = lazy(() => import("./containers/Orders/Orders"));
  const Logout = lazy(() => import("./containers/Auth/Logout/Logout"));

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/" exact component={BurgerBuilder} />
      <Redirect to="/" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to={props.authRedirectPath} />
      </Switch>
    );

    if (props.isAdmin) {
      routes = (
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/logout" component={Logout} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to={props.authRedirectPath} />
        </Switch>
      );
    }
  }
  return (
    <div>
      <Layout>
        <Suspense fallback={<Spinner />}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath,
    isAdmin: state.auth.admin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
