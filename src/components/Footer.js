import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
// import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';

//CSS styles
const useStyles = makeStyles((theme) => ({
    root: {
         background: "#2a272a",
      "& .MuiBottomNavigationAction-root":{
          minWidth: 0,
          maxWidth: 250,
      },

      "& .MuiSvgIcon-root": {
          fill: "#82a0aa",
         "&:hover": {
             fill: "#a3cfcd",
             fontSize: "1.8rem",
         }, 
      },
    },
  }));

  
  const Footer = () => {
      const classes = useStyles();

    return (
        <BottomNavigation 
            width="auto"
        >
            <BottomNavigationAction 
                className={classes.root}
                style={{ padding: 0 }}
                icon={<LinkedInIcon/>}
            />
            <BottomNavigationAction 
                className={classes.root}
                style={{ padding: 0 }}
                icon={<Facebook/>}
            />
            <BottomNavigationAction 
                component={Link}
                target={"_blank"}
                to={"/https://www.instagram.com/marco_sosa_rosales/"}
                className={classes.root}
                style={{ padding: 0 }}
                icon={<Instagram/>}
            />
        </BottomNavigation>
    )
}

export default Footer
