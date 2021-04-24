import React, {useState} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Typography,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import Navbar from "./Navbar";
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import cra from '../images/crudrestapi.png';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/javascript-fullstack.jpg";
import project3 from "../images/mern-stack.jpg";
import project4 from "../images/react-redux.jpg";
import project5 from "../images/crudrestapi.png";
import materialfetch from "../images/materialfetch.jpg";
import { Link } from "react-router-dom";

//CSS styles

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
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
      background: "#000",
      height: "100%",
    },
    cardContainer: {
      maxWidth: 345,
      margin: "5rem auto",
    },
  }),
);


const Portfolio = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={materialfetch}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  REST API with Material-UI
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Material-UI is an open source library aligned with Google's
                  Material Design and its icons. In this project I make an
                  extense use of Material-UI while connecting and adding data to
                  an endpoint.
                </Typography>
                <br />
                <Typography variant="body1" color="textPrimary">
                  Tools used:
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="ul"
                >
                  <li>Json-server</li>
                  <li>Fetch</li>
                  <li>Material-UI</li>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                <Link
                  to="/create"
                  style={{ color: "#3f51b5", textDecoration: "none" }}
                  activeStyle={{ color: "tan" }}
                >
                  Live demo
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit dolores illum hic vero. Nihil explicabo porro
                  et, at fugit dolore blanditiis cum ipsa quidem necessitatibus
                  culpa perspiciatis, exercitationem maiores aspernatur.At
                  consectetur dolor expedita dolorum fugiat quaerat quae
                  eligendi delectus dicta numquam itaque commodi, voluptate in
                  ipsam aut, ex illo. Eaque vitae veniam impedit, ex libero
                  porro odio blanditiis enim.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit dolores illum hic vero. Nihil explicabo porro
                  et, at fugit dolore blanditiis cum ipsa quidem necessitatibus
                  culpa perspiciatis, exercitationem maiores aspernatur.At
                  consectetur dolor expedita dolorum fugiat quaerat quae
                  eligendi delectus dicta numquam itaque commodi, voluptate in
                  ipsam aut, ex illo. Eaque vitae veniam impedit, ex libero
                  porro odio blanditiis enim.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Application
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit dolores illum hic vero. Nihil explicabo porro
                  et, at fugit dolore blanditiis cum ipsa quidem necessitatibus
                  culpa perspiciatis, exercitationem maiores aspernatur.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 5 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project5}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  REST API - CRUD
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This project access to a Fake API REST with Ghibli's movie
                  data made in NodeJS with json-server. I have an endpoint
                  towards port 3001, from where the JSON object is read and
                  displayed in a Material-UI table. A full ReactJS CRUD
                  interface to handle the data is available.
                </Typography>
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
                  <li>Material-UI</li>
                  <li>json-server</li>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                <Link
                  to="/crudapi"
                  style={{ color: "#3f51b5", textDecoration: "none" }}
                  activeStyle={{ color: "tan" }}
                >
                  Live demo
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project tst */}
        <Grid item xs={12} sm={8} md={6}>
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
                  In development of this project I created a json-server's Fake API REST with Ghibli's movie data and used MaterialUI for the looks. Then I deploy the final NodeJS API in Heroku.
                </Typography>
              </CardContent>


            <CardActions disableSpacing>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Button size="small" color="primary">
                <Link
                  to="/crudapi"
                  style={{ color: "#3f51b5", textDecoration: "none" }}
                  activeStyle={{ color: "tan" }}
                >
                  Live demo
                </Link>
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
                  <li>Material-UI</li>
                  <li>json-server</li>
                  <li>Postman</li>
                </Typography>
                <br/>
                <Typography paragraph>
                  API is an abstraction of functions and procedures.
                  REST is a logical set of restrictions and recommendations to build an API. Is an architectural style.
                  RestFul API is an implementation of the REST logic and works strictly under Client - Server architechture and uses HTTP as the communication protocol.
                  But how the server knows what to do? Under REST, each of our API procedures has three important parts: 
                </Typography>
                <Typography
                  component="ul"
                >
                  <li>HTTP Verb (GET, POST, DELETE, PUT, PATCH, etc.)</li>
                  <li>An unique URI (Uniform Resource Identifier)</li>
                  <li>Required data for the server to satisfy the request, including the authentication information</li>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
