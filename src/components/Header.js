import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(()=>({
    root : {
        backgroundColor  : "#fff"

    },
    searchBoxStyle :{
        opacity : 0.6,
        padding : " 0px 8px",
        fontSize : "0.8rem",
        "&:hover" : {
            backgroundColor : "#f2f2f2"
        },
        "& .MuiSvgIcon-root" : {
            marginRight : "10px"
        }
    },
   
}))
const Header = () => {

    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item>
                        <InputBase  
                            className={classes.searchBoxStyle}
                            placeholder="search here ..."
                            fullWidth
                            startAdornment = {<SearchIcon fontSize="small"/>}
                        />
                    </Grid>
                    <Grid item sm />
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={2} color="secondary">
                                <NotificationsIcon fontSize="small"/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={4} color="error">
                                <ChatBubbleIcon fontSize="small"/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <ExitToAppIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header
