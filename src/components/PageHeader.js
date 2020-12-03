import { Card, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import PersonPinIcon from '@material-ui/icons/PersonPin';

const useStyles=makeStyles((theme)=>({
    pageHeader : {
        display : "flex",
        padding : theme.spacing(4),
        marginBottom : theme.spacing(4)
    },
    pageIcon : {
        display : "inline-block",
        padding : theme.spacing(2),
        color: "#3c44b1",
        
    }
}))
const PageHeader = () => {
    const classes = useStyles()
    return (
        <Paper elevation={0} square>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                   {<PersonPinIcon/>}
                </Card>
                <div style={{marginLeft : 20}}>
                    <Typography variant='h6'>
                        Employee Information
                    </Typography>

                    <Typography variant='subtitle2'>
                        Put your information here  
                    </Typography>

            
                </div>
            </div>
        </Paper>
    )
}

export default PageHeader
