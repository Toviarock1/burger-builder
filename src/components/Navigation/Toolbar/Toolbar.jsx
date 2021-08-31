import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Drawertoggle from './../SideDrawer/Drawertoggle/Drawertoggle';

import classes from './Toolbar.module.css'

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <Drawertoggle clicked={props.DrawertoggleClicked} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems isAuthenticated={props.isAuth} />
            </nav>
        </header>
    )
}

export default toolbar
