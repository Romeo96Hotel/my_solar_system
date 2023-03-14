import "./stylesheets/home.css";
/* Sun + planet images */
import sun from "./images/sun.png";
import mercury from "./images/mercury.png";
import venus from "./images/venus.png";
import earth from "./images/earth.png";
import mars from "./images/mars.png";
import jupiter from "./images/jupiter.png";
import saturn from "./images/saturn.png";
import uranus from "./images/uranus.png";
import neptune from "./images/neptune.png";

import {
  header,
  main,
  sunImg,
  sPlanetImg,
  mPlanetImg,
  lPlanetImg,
  overlay,
  background,
} from "../components";

const homePage = () => {
  const headerSection = header("My Solar System...", "header");
  const mainSection = main("main");
  const bgOverlay = overlay();
  const bgImg = background();

  const images = {
    sunImg: sunImg(sun),
    mercuryImg: sPlanetImg(mercury),
    venusImg: mPlanetImg(venus),
    earthImg: mPlanetImg(earth),
    marsImg: sPlanetImg(mars),
    jupiterImg: lPlanetImg(jupiter),
    saturnImg: lPlanetImg(saturn),
    uranusImg: mPlanetImg(uranus),
    neptuneImg: mPlanetImg(neptune),
  };
  const imageArray = Object.keys(images);

  document.body.appendChild(headerSection);
  document.body.appendChild(mainSection);

  imageArray.forEach((image, index) => {
    /* planet container div */
    const planetContainer = images[image];
    planetContainer.setAttribute("data-index", index);

    mainSection.appendChild(planetContainer);
  });

  mainSection.appendChild(bgOverlay);
  mainSection.appendChild(bgImg);
};

export { homePage };
