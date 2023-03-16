/* entry file for application */
import { header, mercuryImg } from "./components.js";
import { renderPage } from "./functions.js";
import { homeP } from "./pages/home.js";
import { sunInfoPage } from "./pages/sun.js";

document.addEventListener("DOMContentLoaded", firstLoad());

function firstLoad() {
  const content = document.querySelector("#content");
  content.appendChild(header());
  homeP();
  const images = document.querySelector("#img-container");
  const imageList = Array.from(images.childNodes);

  imageList.forEach((image, index) => {
    image.setAttribute("data-index", index);
    image.classList.add("top-level");
    image.addEventListener("click", switchPage);
  });
}

/* switches home page with respective info page */
function switchPage(e) {
  const targ = parseInt(e.target.dataset.index);

  switch (targ) {
    case 0:
      renderPage();
      sunInfoPage();
      break;
    case 1:
      renderPage();
      break;
    case 2:
      renderPage();
      break;
    case 3:
      renderPage();
      break;
    case 4:
      renderPage();
      break;
    case 5:
      renderPage();
      break;
    case 6:
      renderPage();
      break;
    case 7:
      renderPage();
      break;
    case 8:
      renderPage();
      break;

    default:
      console.log("not a target");
      break;
  }
}
