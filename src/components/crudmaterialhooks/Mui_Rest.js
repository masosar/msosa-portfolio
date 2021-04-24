import React, { useState, useEffect } from "react";
// import Navbar from "../Navbar";
// import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
// import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
import {
  Box,
  // Modal,
   Button,
} from "@material-ui/core";
// import { useHistory } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import BgCactus from "../../cactus19201080.jpg";
import MuiNoteCard from "./Mui_NoteCard";
// import { mergeClasses } from "@material-ui/styles";
import { Link } from 'react-router-dom';

const themeLight = createMuiTheme({
  palette: {
    primary: {
      light: "#ffb27a",
      main: "#00755f",
      dark: "#552000",
      contrastText: "#dfe0df",
    },
  },
  typography: {
    fontFamily: "Ubuntu",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

const useStyles = makeStyles({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  field: {
    marginTop: 10,
    marginBottom: 0,
    display: "block",
    backgroundColor: "#ffe8e2",
    borderColor: "#b17162",
  },
  container: {
    backgroundImage: `url(${BgCactus})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "calc(100% - 64px)",
    minHeight: "calc(100vh - 70px)",
    maxWidth: "100% !important",
    marginTop: "13px"
  },
  box: {
    maxWidth: "90%",
    marginLeft: "auto",
    marginRight: "auto"

  }
});

function MaterialuiRest() {
  const classes = useStyles();
  // const history = useHistory();

  //Store data from fetch
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/movies/")
    //fetch("https://node-ex-mysql.herokuapp.com/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch('http://localhost:3001/movies/' + id, {
      method: 'DELETE'
    })

    const newMovie = movies.filter(movie => movie.id !== id);
    setMovies(newMovie);
  } 

  return (
    <>
      <CssBaseline />
      {/* <Navbar /> */}
      <Container fixed className={classes.container}>
      <Box className={classes.box}>

        <ThemeProvider theme={themeLight}>
          <Grid container spacing={3}>
            {movies.map(movie => (
              <Grid item key={movie.id} xs={12} sm={6} md={4} >
                <MuiNoteCard  movie={movie} handleDelete={handleDelete} />
              </Grid>
            ))}
          </Grid>
        </ThemeProvider>

      </Box>
      <Button size="small" color="primary">
                  <Link to='/create' style={{color: '#3f51b5', textDecoration: 'none'}} activeStyle={{color: 'tan'}}>
                    Add a record
                  </Link>
                </Button>
      </Container>
    </>
  );
}

export default MaterialuiRest;
