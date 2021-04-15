import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
// import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

//CSS styles
const useStyles = makeStyles((theme) => ({
    root: {
         background: "#412728",
      "& .MuiBottomNavigationAction-root":{
          minWidth: 0,
          maxWidth: 250,
      },

      "& .MuiSvgIcon-root": {
          fill: "tan",
         "&:hover": {
             fill: "#f9f871",
             fontSize: "1.8rem",
         }, 
      },
    },
  }));

const Footer = () => {
    const classes = useStyles();

    return (
        <BottomNavigation width="auto" style={{ background: "#222" }} >
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
                className={classes.root}
                style={{ padding: 0 }}
                icon={<Instagram/>}
            />
        </BottomNavigation>
    )
}

export default Footer
