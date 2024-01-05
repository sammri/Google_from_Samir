// span-header-top
function toggleBorder(element) {
  // Удаляем класс у всех элементов
  var elements = document.getElementsByClassName("mySpan");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove("active");
  }
  element.classList.add("active");
}

// animation-right
let options = {
  root: null,
  rootMargin: "5px",
  threshold: 0.5,
};

let callback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("find", entry);
      entry.target.classList.add("active");
    }
  });
};
//--------------------------------------
let observer = new IntersectionObserver(callback, options);

let target = document.querySelectorAll(".carusel");
target.forEach((target) => {
  observer.observe(target);
});

let observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

let intersectionObserver = new IntersectionObserver(
  handleIntersection,
  observerOptions
);

let targetElements = document.querySelectorAll(".carusel-two");

targetElements.forEach((targetElement) => {
  intersectionObserver.observe(targetElement);
});

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}

//--------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  var titleElement = document.querySelector(".ge-nav__links__dropdown__title");
  var listElement = document.querySelector(".ge-nav__links__dropdown__list");

  var isOpen = false;

  titleElement.addEventListener("click", function () {
    isOpen = !isOpen;

    if (isOpen) {
      listElement.style.opacity = "1";
      listElement.style.transform = "translateY(0)";
      listElement.style.pointerEvents = "auto";
    } else {
      listElement.style.opacity = "0";
      listElement.style.transform = "translateY(-20px)";
      listElement.style.pointerEvents = "none";
    }
  });
});
