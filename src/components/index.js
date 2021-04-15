import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  particlesCanvas: {
    position: "fixed",
    opacity: "0.8",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particlesCanvas}
        params={{
          particles: {
            number: {
              value: 75,
              density: {
                enable: true,
                value_area: 700,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 25,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#fff",
              width: 2
            },
            color: {
              value: "#fff",
            },
            shape: {
              stroke: {
                width: 5,
                color: "#fff",
              },
              polygon: {
                nb_sides: 12 
              }
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
              },
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              straight: false,
              random: true,
              // attract: {
              //   enable: true,
              //   rotatex: 3000,
              //   rotatey: 1500,
              // },
              out_mode: "bounce",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: ["repulse", "bubble"],
              },
              onclick: {},
            },
          },
        }}
      />
    </>
  );
};

export default Home;
