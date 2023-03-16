/* home page section */
import "./stylesheets/home.css";

import {
  overlay,
  backgroundImg,
  sunImg,
  mercuryImg,
  earthImg,
  venusImg,
  marsImg,
  jupiterImg,
  saturnImg,
  neptuneImg,
  uranusImg,
} from "../components.js";

const homeP = () => {
  const mainSection = document.querySelector("#content");
  mainSection.classList.add("#home");

  const imageContainer = document.createElement("div");
  imageContainer.setAttribute("id", "img-container");

  const bgOverlay = overlay();
  const background = backgroundImg();
  const images = [
    sunImg(),
    mercuryImg(),
    earthImg(),
    venusImg(),
    marsImg(),
    jupiterImg(),
    saturnImg(),
    uranusImg(),
    neptuneImg(),
  ];

  /* Append background */
  mainSection.appendChild(bgOverlay);
  mainSection.appendChild(background);
  mainSection.appendChild(imageContainer);

  /* append all image elements */
  images.forEach((image, index) => {
    imageContainer.appendChild(image);
  });
};

export { homeP };
