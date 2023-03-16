
/* removes all content from page except the header */
const renderPage = () => {
  const content = document.querySelector("#content");

  while (content.childElementCount > 1) {
    content.removeChild(content.lastElementChild);
  }
};

export { renderPage };
