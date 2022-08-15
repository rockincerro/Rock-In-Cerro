class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}



window.addEventListener('load', () => {
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
    );
    mobileNavbar.init();
});

function leiaMais() {

  var pontos = document.getElementById("pontos");
  var maisTexto = document.getElementById("mais")
  var continuarLendo = document.getElementById("btnLeiaMais")
  var textMobile = document.getElementById("textMobile")

  maisTexto.classList.toggle("exibir");
  textMobile.classList.toggle("exibir")

  if(pontos.style.display === "none") {
    pontos.style.display="inline";  
    maisTexto.style.display="none";
    continuarLendo.innerHTML="Continuar Lendo";
  } else {
    pontos.style.display="none";
    maisTexto.style.display="inline";
    continuarLendo.innerHTML="Ler Menos";
  }
}
