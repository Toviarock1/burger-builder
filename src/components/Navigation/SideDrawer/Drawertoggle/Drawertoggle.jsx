import React from 'react'
import classes from './Drawertoggle.module.css';

const drawertoggle = (props) => {
    return (
        <div className={classes.Drawertoggle} onClick={props.clicked}>
           <div></div>
           <div></div>
           <div></div>
        </div>
    )
}

export default drawertoggle;
