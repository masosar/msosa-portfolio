import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography, Avatar, Grid, Box
} from '@material-ui/core';
import Typed from 'react-typed';
import avatar from '../msavatar.png'

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    }, 
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar 
                    className={ classes.avatar }
                    src={ avatar } alt="Marco Sosa" 
                />
            </Grid>
            <Typography 
                className={classes.title}
                variant="h3">
                <Typed strings={["Marco A. Sosa"]} typeSpeed={90} />
            </Typography>
            <br/>
            <Typography
                className={classes.subtitle} 
                variant="h4">
                <Typed 
                    strings={["Web Development",
                    "Frontend",
                    "REST API",
                    "PHP-MySql",
                    "MERN Stack"    
                ]} 
                    typeSpeed={60}
                    backSpeed={50}
                    loop
                />
            </Typography>
        </Box>
    )
}

export default Header
