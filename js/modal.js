function showModal(modalId) {
  if (window.innerWidth < 968) {
    return;
  } else {
    document.getElementById(modalId).classList.add("modal");
    document.getElementById(modalId).removeAttribute("id");
  }
}

function clickOutside(e, modalId) {
  if (e.target.className === "modal") {
    document
      .getElementsByClassName(modalId)[0]
      .setAttribute("id", "modal-hidden");
  }
}

function showHamburgerMenu() {
  document
    .getElementById("mobile-menu-hidden")
    .classList.add("mobile-menu-show");
  document.getElementById("mobile-menu-hidden").removeAttribute("id");
}

function hideHamburgerMenu() {
  document
    .getElementsByClassName("mobile-menu-show")[0]
    .setAttribute("id", "mobile-menu-hidden");
}

var currentCarouselIndex = 0;

let carousel = document.getElementById("carousel");
let btnLeft = document.getElementById("arrow-left");
let btnRight = document.getElementById("arrow-right");

btnLeft.onclick = () => {
  if (currentCarouselIndex > 0) currentCarouselIndex--;

  showCarouselDiv();
};

btnRight.onclick = () => {
  if (currentCarouselIndex < carouselDivWrappers - 1) currentCarouselIndex++;

  showCarouselDiv();
};

function showCarouselDiv() {
  let carouselDivWrapper = document.getElementById("carousel");
  let carouselDivs = carouselDivWrapper.getElementsByTagName("div");

  for (i = 0; i < carouselDivs.length; i++) {
    if (i == currentCarouselIndex) {
      carouselDivs[i].style = "";
    } else {
      carouselDivs[i].style = "display: none";
    }
  }
}
