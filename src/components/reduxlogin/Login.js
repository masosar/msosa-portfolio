import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Navbar from "../Navbar";
import {
  Container,
  TextField,
  Typography,
  Box,
  Grid,
  Button,
} from "@material-ui/core";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

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

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#ffb27a",
    },
    "& label": {
      color: "#dfe0df",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#dfe0df",
      },
      "&:hover fieldset": {
        borderColor: "#dfe0df",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#dfe0df",
      },
    },
  },
})(TextField);

const useStyles = makeStyles({
  field: {
    marginTop: 10,
    marginBottom: 0,
    display: "block",
  },
});

const Login = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameError(false);
    setEmailError(false);
    setPasswordError(false);

    if(name === ''){
      setNameError(true);
    }
    if(email === ''){
      setEmailError(true);
    }
    if(password === ''){
      setPasswordError(true);
    }

    if (name && email && password) {
      console.log(name, email, password);
    }
  };

  return (
    <>
      <Navbar />
      <CssBaseline />
      <Container fixed>
        <ThemeProvider theme={themeLight}>
          <Box component="div">
            <Grid container justify="center">
              <form
                noValidate
                autoComplete="false"
                onSubmit={handleSubmit}
                className={classes.form}
              >
                <Typography
                  variant="h5"
                  style={{
                    color: "#ffb27a",
                    textAlign: "center",
                    textTransform: "uppercase",
                  }}
                >
                  Login
                </Typography>
                <InputField
                  className={classes.field}
                  fullWidth={true}
                  label="Name"
                  variant="outlined"
                  inputProps={{ style: { color: "white" } }}
                  margin="dense"
                  size="medium"
                  value={name}
                  required
                  error={nameError}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <InputField
                  className={classes.field}
                  fullWidth={true}
                  label="Email"
                  variant="outlined"
                  inputProps={{ style: { color: "white" } }}
                  margin="dense"
                  size="medium"
                  value={email}
                  required
                  error={emailError}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <InputField
                  className={classes.field}
                  fullWidth={true}
                  label="Password"
                  variant="outlined"
                  inputProps={{ style: { color: "white" } }}
                  margin="dense"
                  size="medium"
                  value={password}
                  required
                  error={passwordError}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <Button
                  type="submit"
                  fullWidth={true}
                  variant="contained"
                  color="primary"
                  endIcon={<VpnKeyIcon />}
                >
                  Go
                </Button>
              </form>
            </Grid>
          </Box>
        </ThemeProvider>
      </Container>
      {/* <div className="login">
        <form className="login_form">
          <h1>Login here 🚪</h1>
          <input
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      </div> */}
    </>
  );
};

export default Login;
