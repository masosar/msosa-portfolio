import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import { TextField, Box, Grid, Button } from "@material-ui/core";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
import { useHistory } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import BgCactus from "../../cactus19201080.jpg";
// import Navbar from "../Navbar";

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
    borderColor: "#b17162"
  },
  container: {
    backgroundImage: `url(${BgCactus})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "calc(100vh - 64px)",
    maxWidth: "100% !important",
  },
});

export default function Create() {
  const classes = useStyles();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [originalTitle, setOriginalTitle] = useState("");
  const [originalTitleRomanised, setOriginalTitleRomanised] = useState("");
  const [description, setDescription] = useState("");
  const [director, setDirector] = useState("");
  const [release_date, setRelease_date] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [originalTitleError, setOriginalTitleError] = useState(false);
  const [
    originalTitleRomanisedError,
    setOriginalTitleRomanisedError,
  ] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [directorError, setDirectorError] = useState(false);
  const [release_dateError, setRelease_dateError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setOriginalTitleError(false);
    setOriginalTitleRomanisedError(false);
    setDescriptionError(false);
    setDirectorError(false);
    setRelease_dateError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (originalTitle === "") {
      setOriginalTitleError(true);
    }
    if (originalTitleRomanised === "") {
      setOriginalTitleRomanisedError(true);
    }
    if (description === "") {
      setDescriptionError(true);
    }
    if (director === "") {
      setDirectorError(true);
    }
    if (release_date === "") {
      setRelease_dateError(true);
    }

    if (title && originalTitle && originalTitleRomanised && description && director && release_date) {
      fetch("http://localhost:3001/movies", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, originalTitle, originalTitleRomanised, description, director, release_date }),
      }).then(() => history.push("/muirest"));
    }
  };

  return (
    <>
      <CssBaseline />
      {/* <Navbar /> */}
      <Container fixed maxWidth="sm" className={classes.container}>
        <ThemeProvider theme={themeLight}>
          <Box component="div">
            <Grid container justify="center">
              <form
                noValidate
                autoComplete="off"
                className={classes.form}
                onSubmit={handleSubmit}
              >
                <Typography
                  variant="h6"
                  style={{
                    //color: "primary",
                    textAlign: "center",
                    textTransform: "uppercase",
                  }}
                  color="primary"
                  // component="h2"
                  // textAlign="center"
                  gutterBottom
                >
                  Add a record
                </Typography>
                <TextField
                  className={classes.field}
                  onChange={(e) => setTitle(e.target.value)}
                  label="Title"
                  variant="outlined"
                  color="primary"
                  fullWidth
                  required
                  error={titleError}
                />
                <TextField
                  className={classes.field}
                  onChange={(e) => setOriginalTitle(e.target.value)}
                  label="Original Title"
                  variant="outlined"
                  color="primary"
                  fullWidth
                  required
                  error={originalTitleError}
                />
                <TextField
                  className={classes.field}
                  onChange={(e) => setOriginalTitleRomanised(e.target.value)}
                  label="Original Title Romanised"
                  variant="outlined"
                  color="primary"
                  fullWidth
                  required
                  error={setOriginalTitleRomanisedError}
                />
                <TextField
                  className={classes.field}
                  onChange={(e) => setDescription(e.target.value)}
                  label="Description"
                  variant="outlined"
                  color="primary"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  error={descriptionError}
                />
                <TextField
                  className={classes.field}
                  onChange={(e) => setDirector(e.target.value)}
                  label="Director"
                  variant="outlined"
                  color="primary"
                  fullWidth
                  required
                  error={setDirectorError}
                />
                <TextField
                  className={classes.field}
                  onChange={(e) => setRelease_date(e.target.value)}
                  label="Date of Release"
                  variant="outlined"
                  color="primary"
                  fullWidth
                  required
                  error={setRelease_dateError}
                />
                {/* <Radio value="hello" />
        <Radio value="goodbye" /> */}

                {/* <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={release_date} onChange={(e) => setRelease_date(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl> */}
                <br />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth={true}
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  Submit
                </Button>
              </form>
            </Grid>
          </Box>
        </ThemeProvider>
      </Container>
    </>
  );
}
