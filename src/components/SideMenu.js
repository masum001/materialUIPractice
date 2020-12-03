import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const usestyles = makeStyles(()=>({
    sideMenueStyle : {
        display : 'flex',
        flexDirection : "column",
        position : "absolute",
        left : 0,
        width :  300,
        height : "100%",
        backgroundColor : "#253053"
    }
}))
const SideMenu = () => {
    const classes =  usestyles()
    return (
        <div className={classes.sideMenueStyle}>
            
        </div>
    )
}

export default SideMenu
