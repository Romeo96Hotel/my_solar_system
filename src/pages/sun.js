import { sunImg, backgroundImg, overlay } from "../components";
import "./stylesheets/sun.css";

const sunInfoPage = () => {
  const content = document.querySelector("#content");
  const imageContainer = sunImg();
  const bg = backgroundImg();
  const bgOverlay = overlay();

  content.appendChild(bg);
  content.appendChild(bgOverlay);
  content.appendChild(imageContainer);

  const textDiv = document.createElement("div");
  const h1 = document.createElement("h1");
  const para = document.createElement("p");

  textDiv.append(h1, para);

  
};

export { sunInfoPage };
