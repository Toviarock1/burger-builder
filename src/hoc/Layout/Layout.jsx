import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }

    const sideDrawertoggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }


    return (
        <React.Fragment>
            <Toolbar
                isAuth={props.isAuthenticated}
                isAdmin={props.admin}
                DrawertoggleClicked={sideDrawertoggleHandler} />
            <SideDrawer
                isAuth={props.isAuthenticated}
                open={showSideDrawer}
                isAdmin={props.admin}
                closed={sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        admin: state.auth.admin
    }
}

export default connect(mapStateToProps)(Layout);