import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/javascript-fullstack.jpg";
import project3 from "../images/mern-stack.jpg";
import project4 from "../images/react-redux.jpg";
import project5 from "../images/crudrestapi.png";
import { Link } from 'react-router-dom';

//CSS styles
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    //   background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
}));

const Portfolio = () => {
  const classes = useStyles();
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
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 1
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
                alt="Project 1"
                height="140"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 4
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
                  Created a Fake API REST in NodeJS. When the project opens, a JSON object is created from Ghibli's API showing basic info of their movies. Once the object is filled, we have a CRUD interface to handle the data.
                </Typography>
              </CardContent>
            </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  <Link to='/consolas' style={{color: '#3f51b5', textDecoration: 'none'}} activeStyle={{color: 'tan'}}>
                    Live demo
                  </Link>
                </Button>
              </CardActions>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Portfolio;