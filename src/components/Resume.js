import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Button } from "@material-ui/core";
import Navbar from "./Navbar";
import { MenuItems } from "./ResumeItems";
//import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: "60px",
    background: "#000",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #82a0aa",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid #677381",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#a3cfcd #a3cfcd transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#677381",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #a3cfcd #a3cfcd",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "10.375rem",
    margin: "0 auto 0 auto",
    fontSize: "1rem",
    fontWeight: "bold",
    background: "#4b4a54",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0.5rem 0.5rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "#ff0000",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#82a0aa",
    padding: "0",
    //textTransform: "uppercase",
  },
  myFixedItem: {
    position: "fixed",
    right: "10px",
    left: "auto",
    marginTop: "80px",
    minHeight: "50px",
    width: "252px",
    textAlign: "center",
    wordWrap: "break-word",
    backgroundColor: "aquamarine",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      {" "}
      <div className={classes.myFixedItem}>
        <p>Download Resume</p>
        <Button size="small" color="primary">
          <a
            href="http://marcososa.me/files/cv_marco_en_php.pdf"
            target="_blank"
            rel="noreferrer"
            download
          >
            English
          </a>
        </Button>
        <Button size="small" color="primary">
          <a
            href="http://marcososa.me/files/cv_marco_es_php.pdf"
            target="_blank"
            rel="noreferrer"
            download
          >
            Español
          </a>
        </Button>
      </div>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Working experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          {MenuItems.map((item, index) => {
            return (
              <>
                <Typography
                  variant="h2"
                  className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                  {item.year}
                </Typography>
                <Box
                  component="div"
                  className={classes.timeLineItem}
                  key={item.index}
                >
                  <Typography
                    variant="h5"
                    align="center"
                    className={classes.subHeading}
                  >
                    {item.position}
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    style={{ color: "#a3cfcd", fontSize: "1.5rem" }}
                  >
                    {item.companyName}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    style={{ color: "#fff" }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Education
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2001 - 2005
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Universidad Tecnológica de México
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#a3cfcd", fontSize: "1.5rem" }}
            >
              Informática Administrativa
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "#fff" }}
            >
              Applying Administration and Computer Science to the design and
              operation of systems for the management of data.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
