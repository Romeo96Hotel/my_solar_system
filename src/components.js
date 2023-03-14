const header = (text, className) => {
  const container = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = text;
  container.appendChild(h1);
  container.classList.add(className);

  return container;
};

const main = (className) => {
  const container = document.createElement("div");
  container.classList.add(className);

  return container;
};

const sunImg = (src) => {
  const imageContainer = document.createElement("div");
  const image = new Image(400, 400);
  image.src = src;
  image.alt = "sun image";
  imageContainer.appendChild(image);

  return imageContainer;
};

/* adds a nice tint to the page */
const overlay = () => {
  const div = document.createElement("div");
  div.classList.add("bg-overlay");

  return div;
};

const sPlanetImg = (src) => {
  const imageContainer = document.createElement("div");
  const image = new Image(100, 100);
  image.src = src;
  image.alt = "small planet image";
  imageContainer.appendChild(image);

  return imageContainer;
};

const mPlanetImg = (src) => {
  const imageContainer = document.createElement("div");
  const image = new Image(150, 150);
  image.src = src;
  image.alt = "medium planet image";
  imageContainer.appendChild(image);

  return imageContainer;
};

const lPlanetImg = (src) => {
  const imageContainer = document.createElement("div");
  const image = new Image(250, 250);
  image.src = src;
  image.alt = "large planet image";
  imageContainer.appendChild(image);

  return imageContainer;
};

const background = () => {
  const container = document.createElement("div");
  container.classList.add("bg-img");

  return container;
};

export {
  header,
  main,
  sunImg,
  sPlanetImg,
  mPlanetImg,
  lPlanetImg,
  background,
  overlay,
};
