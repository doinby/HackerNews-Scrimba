import RouterHandler from "./router.js";

window.onhashchange = () => {
  setActiveLink();
}

function setActiveLink() {
  const links = document.querySelectorAll('.header-link');
  links.forEach(link => {
    const currentPath = window.location.hash;
    const linkPath = link.getAttribute('href');
    if (currentPath === linkPath) {
      link.classList.add('active');
    } else link.classList.remove('active');
  });
}

class App {
  constructor() {
    new RouterHandler();
  }
}

new App();
