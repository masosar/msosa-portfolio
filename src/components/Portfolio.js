import React, {useState} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button, Link
} from "@material-ui/core";
import Navbar from "./Navbar";
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import cra from '../images/crudrestapi.png';
import LinkIcon from '@material-ui/icons/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import project1 from "../images/html-css-javascript-lg.jpg";
import shoppingcart from "../images/shoppingcart.jpg";
import simpleapi from "../images/books.jpg";
import { Link as RouterLink }  from "react-router-dom";
import Masonry from "react-masonry-css";

//CSS styles

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: 'red[500]',
    },
    mainContainer: {
      margin: "auto auto",
      background: "#000",
      height: "100%",
      maxWidth: "1200px",
      marginTop: "64px"
    },
    cardContainer: {
      maxWidth: 400,
      margin: "1rem auto",
    },
    masonrygrid: {
      display: "flex",
      marginLeft: "-30px",
      width: "auto"
    },
    masonrygridcolumn: {
      paddingLeft: "30px",
      backgroundClip: "padding-box"
    },
  }),
);


const Portfolio = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />

        {/* Project tst */}
        <Masonry
          breakpointCols={breakpoints}
          className={classes.masonrygrid}
          columnClassName={classes.masonrygridcolumn}
        >
        <div>
          <Card className={classes.cardContainer}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    S
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Simple API"
                subheader="Node"
              />
              <CardMedia
                className={classes.media}
                image={simpleapi}
                title="NODE API"
              />

              <CardContent>
                <Typography gutterBottom variant="h5">
                  NODE API
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  10 minute project in which I learnt to create a Node API -with one endpoint- and to deploy it in Heroku. Is made up by one single endpoint which displays a data file in JSON format. Opens in new tab.
                </Typography>
              </CardContent>


            <CardActions disableSpacing>
              <IconButton aria-label="share">
                <LinkIcon />
              </IconButton>
              <Button size="small" color="primary">
                <Link
                  href="https://hostedbooksapi.herokuapp.com/books"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo
                </Link>
              </Button>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded1,
                })}
                onClick={handleExpandClick1}
                aria-expanded={expanded1}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded1} timeout="auto" unmountOnExit>
              <CardContent>
              <br />
                <Typography variant="body1" color="textPrimary">
                  Tools used:
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="ul"
                >
                  <li>NodeJS</li>
                  <li>ReactJS</li>
                  <li>Heroku</li>
                  <li>Postman</li>
                </Typography>
                <br/>
                <Typography paragraph>
                  <pre>
                    
                  </pre>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>

        {/* shopping cart */}
        <div>
          <Card className={classes.cardContainer}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    Sh
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Super Simple Shopping Cart"
                subheader="React"
              />
              <CardMedia
                className={classes.media}
                image={shoppingcart}
                title="Shopping cart"
              />

              <CardContent>
                <Typography gutterBottom variant="h5">
                  SIMPLE SHOPPING CART
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is a simple module and part of a Shopping Cart. It stores the selected items and calculates the total. Can add or remove items at will.
                </Typography>
              </CardContent>


            <CardActions disableSpacing>
              <IconButton aria-label="share">
                <LinkIcon />
              </IconButton>
              <Button size="small" color="primary">
                <RouterLink
                  to="/shop"
                  style={{ color: "#3f51b5", textDecoration: "none" }}
                  activestyle={{ color: "tan" }}
                >
                  Live demo
                </RouterLink>
              </Button>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body1" color="textPrimary">
                  Tools used:
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="ul"
                >
                  <li>ReactJS</li>
                  <li>Material-UI</li>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>

        {/* Project tst */}
        <div>
          <Card className={classes.cardContainer}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    N
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Node API with CRUD"
                subheader="Material-UI"
              />
              <CardMedia
                className={classes.media}
                image={cra}
                title="NODE API"
              />

              <CardContent>
                <Typography gutterBottom variant="h5">
                  REST API - CRUD
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  NodeJS API based in a single basic endpoint which receives the header with the appropriate http verb in the request. The biggest challenge was to overcome the CORS error.
                </Typography>
              </CardContent>


            <CardActions disableSpacing>
              <IconButton aria-label="share">
                <LinkIcon />
              </IconButton>
              <Button size="small" color="primary">
                <RouterLink
                  to="/crudapi"
                  style={{ color: "#3f51b5", textDecoration: "none" }}
                  activestyle={{ color: "tan" }}
                >
                  Live demo
                </RouterLink>
              </Button>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body1" color="textPrimary">
                  Tools used:
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="ul"
                >
                  <li>NodeJS</li>
                  <li>Express</li>
                  <li>ReactJS</li>
                  <li>MySql</li>
                  <li>Cors</li>
                  <li>Material-UI</li>
                  <li>json-server</li>
                  <li>Postman</li>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        </Masonry>
    </Box>
  );
};

export default Portfolio;
