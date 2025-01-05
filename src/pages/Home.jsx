import React, { useState, useEffect, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { Layout, Row, Col, Typography, Space, Image } from "antd";
import Hero from "../views/Hero";
import About from "../views/About";
import Contact from "../views/Contact";
import Projects from "../views/Projects";

import htmlIcon from "../assets/html-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import sassIcon from "../assets/sass-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import nodeIcon from "../assets/node-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import typescriptIcon from "../assets/typescript-icon.svg";
import vueIcon from "../assets/vue-icon.svg";
import boostrapIcon from "../assets/bootstrap-icon.svg";
import Skills from "../views/Skills";

import UseScrollToTop from "../hooks/useScrollToTop";

const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: {
      enable: true,
      zIndex: 1,
    },
    detectRetina: true,
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onDiv: {
          elementId: "repulse-div",
          enable: false,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "bubble",
          parallax: {
            enable: false,
            force: 60,
            smooth: 10,
          },
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 2,
        },
        connect: {
          distance: 80,
          lineLinked: {
            opacity: 0.5,
          },
          radius: 60,
        },
        grab: {
          distance: 400,
          lineLinked: {
            opacity: 1,
          },
        },
        push: {
          quantity: 2,
        },
        remove: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      lineLinked: {
        blink: false,
        color: "#000",
        consent: false,
        distance: 150,
        enable: false,
        opacity: 0.4,
        width: 1,
      },
      move: {
        attract: {
          enable: false,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        bounce: false,
        direction: "none",
        enable: true,
        outMode: "out",
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        limit: 20,
        value: 15,
      },
      opacity: {
        animation: {
          enable: true,
          minimumValue: 0.2,
          speed: 1,
          sync: false,
        },
        random: true,
        value: 1,
      },
      rotate: {
        animation: {
          enable: true,
          speed: 5,
          sync: false,
        },
        direction: "random",
        random: true,
        value: 0,
      },
      shape: {
        character: {
          fill: false,
          font: "Verdana",
          style: "",
          value: "*",
          weight: "400",
        },
        image: [
          {
            src: htmlIcon,
            width: 20,
            height: 20,
          },
          {
            src: cssIcon,
            width: 20,
            height: 20,
          },
          {
            src: jsIcon,
            width: 20,
            height: 20,
          },
          {
            src: reactIcon,
            width: 20,
            height: 20,
          },
          {
            src: sassIcon,
            width: 20,
            height: 20,
          },
          {
            src: typescriptIcon,
            width: 20,
            height: 20,
          },
          {
            src: nodeIcon,
            width: 20,
            height: 20,
          },
          {
            src: boostrapIcon,
            width: 20,
            height: 20,
          },
        ],
        polygon: {
          sides: 5,
        },
        stroke: {
          color: "#000000",
          width: 0,
        },
        type: "image",
      },
      size: {
        animation: {
          enable: false,
          minimumValue: 0.1,
          speed: 40,
          sync: false,
        },
        random: false,
        value: 16,
      },
    },
    polygon: {
      draw: {
        enable: false,
        lineColor: "#ffffff",
        lineWidth: 0.5,
      },
      move: {
        radius: 10,
      },
      scale: 1,
      url: "",
    },
    background: {
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
  };

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <UseScrollToTop />
    </div>
  );
};

export default Home;

// const particlesOptions = {
//   background: {
//     color: {
//       value: "#000", // Background color of the particle canvas
//     },
//   },
//   fullScreen: {
//     enable: false,
//     zIndex: 1,
//   },
//   detectRetina: true,
//   fpsLimit: 60,
//   particles: {
//     number: {
//       value: 100, // Total number of particles
//       density: {
//         enable: true,
//         value_area: 800,
//       },
//     },
//     // shape: {
//     //   type: "circle", // Particle shape (circle)
//     // },
//     // size: {
//     //   value: 5, // Minimum particle size
//     //   random: true, // Randomize particle sizes
//     //   animation: {
//     //     enable: true,
//     //     speed: 4, // Speed of size change
//     //     minimumValue: 1, // Minimum size of particles
//     //   },
//     // },
//     shape: {
//       character: {
//         fill: false,
//         font: "Verdana",
//         style: "",
//         value: "*",
//         weight: "400",
//       },
//       image: [
//         {
//           src: boostrapIcon,
//           width: 20,
//           height: 20,
//         },
//         {
//           src: cssIcon,
//           width: 20,
//           height: 20,
//         },
//         {
//           src: htmlIcon,
//           width: 20,
//           height: 20,
//         },
//         {
//           src: jsIcon,
//           width: 20,
//           height: 20,
//         },
//         {
//           src: nodeIcon,
//           width: 20,
//           height: 20,
//         },
//         {
//           src: reactIcon,
//           width: 20,
//           height: 20,
//         },
//         {
//           src: sassIcon,
//           width: 20,
//           height: 20,
//         },
//         {
//           src: typescriptIcon,
//           width: 20,
//           height: 20,
//         },
//         {
//           src: vueIcon,
//           width: 20,
//           height: 20,
//         },
//       ],
//       polygon: {
//         sides: 5,
//       },
//       stroke: {
//         color: "#000000",
//         width: 0,
//       },
//       type: "image",
//     },
//     size: {
//       animation: {
//         enable: false,
//         minimumValue: 0.1,
//         speed: 40,
//         sync: false,
//       },
//       random: false,
//       value: 16,
//     },
//     opacity: {
//       value: 0.5, // Opacity of the particles
//       random: true, // Random opacity
//       animation: {
//         enable: true,
//         speed: 1, // Speed of opacity change
//         minimumValue: 0.1, // Minimum opacity
//       },
//     },
//     move: {
//       enable: true, // Enable movement of particles
//       speed: 1, // Speed of particle movement
//       direction: "none", // Particles move in any direction
//       random: true, // Randomize particle movement
//       straight: false, // Particles don't move in a straight line
//       outModes: {
//         bottom: "out",
//         left: "out",
//         right: "out",
//         top: "out",
//       },
//     },
//   },
//   interactivity: {
//     events: {
//       onHover: {
//         enable: true,
//         mode: "repulse", // When mouse hovers, particles repel
//       },
//     },
//   },
// };
