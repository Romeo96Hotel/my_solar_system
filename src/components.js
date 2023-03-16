/* Sun + planet images */
import sun from "./pages/images/sun.png";
import mercury from "./pages/images/mercury.png";
import venus from "./pages/images/venus.png";
import earth from "./pages/images/earth.png";
import mars from "./pages/images/mars.png";
import jupiter from "./pages/images/jupiter.png";
import saturn from "./pages/images/saturn.png";
import uranus from "./pages/images/uranus.png";
import neptune from "./pages/images/neptune.png";

const header = () => {
  const container = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = "My Solar System...";
  container.appendChild(h1);
  container.setAttribute("id", "header");

  return container;
};

/* adds a nice tint to the page */
const overlay = () => {
  const div = document.createElement("div");
  div.setAttribute("id", "bg-overlay");

  return div;
};

const backgroundImg = () => {
  const div = document.createElement("div");
  div.setAttribute("id", "bg");

  return div;
};

const mercuryImg = () => {
  const imageContainer = new Image();
  imageContainer.src = mercury;
  imageContainer.width = 100;
  imageContainer.height = 75;
  imageContainer.setAttribute("id", "mercury-img");

  return imageContainer;
};

const venusImg = () => {
  const imageContainer = new Image();
  imageContainer.src = venus;
  imageContainer.width = 150;
  imageContainer.height = 150;
  imageContainer.setAttribute("id", "venus-img");

  return imageContainer;
};

const earthImg = () => {
  const imageContainer = new Image();
  imageContainer.src = earth;
  imageContainer.width = 150;
  imageContainer.height = 150;
  imageContainer.setAttribute("id", "earth-img");

  return imageContainer;
};

const marsImg = () => {
  const imageContainer = new Image();
  imageContainer.src = mars;
  imageContainer.width = 150;
  imageContainer.height = 150;
  imageContainer.setAttribute("id", "mars-img");

  return imageContainer;
};

const jupiterImg = () => {
  const imageContainer = new Image();
  imageContainer.src = jupiter;
  imageContainer.width = 200;
  imageContainer.height = 200;
  imageContainer.setAttribute("id", "jupiter-img");

  return imageContainer;
};

const saturnImg = () => {
  const imageContainer = new Image();
  imageContainer.src = saturn;
  imageContainer.width = 280;
  imageContainer.height = 200;
  imageContainer.setAttribute("id", "saturn-img");

  return imageContainer;
};

const uranusImg = () => {
  const imageContainer = new Image();
  imageContainer.src = uranus;
  imageContainer.width = 150;
  imageContainer.height = 150;
  imageContainer.setAttribute("id", "uranus-img");

  return imageContainer;
};

const neptuneImg = () => {
  const imageContainer = new Image();
  imageContainer.src = neptune;
  imageContainer.width = 200;
  imageContainer.height = 200;
  imageContainer.setAttribute("id", "neptune-img");

  return imageContainer;
};

const sunImg = () => {
  const imageContainer = new Image();
  imageContainer.src = sun;
  imageContainer.width = 350;
  imageContainer.height = 350;
  imageContainer.setAttribute("id", "sun-img");

  return imageContainer;
};

export {
  header,
  overlay,
  backgroundImg,
  sunImg,
  mercuryImg,
  venusImg,
  marsImg,
  earthImg,
  jupiterImg,
  saturnImg,
  neptuneImg,
  uranusImg,
};
