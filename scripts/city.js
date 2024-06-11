document.addEventListener("DOMContentLoaded", () => {
  const iconElements = document.getElementsByClassName("view-icon");

  Array.from(iconElements).forEach((iconElement) => {
    iconElement.addEventListener("mouseover", () => {
      iconElement.classList.remove("fa-regular");
      iconElement.classList.add("fa-solid");
    });

    iconElement.addEventListener("mouseout", () => {
      iconElement.classList.remove("fa-solid");
      iconElement.classList.add("fa-regular");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.showSection = function (sectionId) {
    var sections = document.getElementsByClassName("section");
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
    var sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = "grid";
    sectionToShow.style.animation = "fadeIn 0.5s";

    var carousels = sectionToShow.getElementsByClassName("carousel");
    for (var j = 0; j < carousels.length; j++) {
      var flkty = Flickity.data(carousels[j]);
      if (flkty) {
        flkty.resize();
      }
    }
  };

  showSection("atracoes-section");

  var carousels = document.querySelectorAll(".carousel");
  carousels.forEach(function (carousel) {
    new Flickity(carousel, {
      autoPlay: true,
      wrapAround: true,
    });
  });

  window.showHide = function () {
    alert("Esta funcionalidade ainda está em desenvolvimento.");
  };
});

function toggleExpanded(element) {
  var articles = document.querySelectorAll(".button");
  articles.forEach(function (button) {
    button.classList.remove("active");
  });
  element.closest(".button").classList.add("active");
}

function toggleReadMore() {
  const paragrafo = document.querySelector('.info-section p');
  paragrafo.classList.toggle('expanded');
  const button = document.querySelector('.read-more');
  const buttonReadMore = document.querySelector('.button-readmore');

  button.textContent = paragrafo.classList.contains('expanded') ? 'Leia menos' : 'Leia mais';
  buttonReadMore.classList.toggle('expanded', paragrafo.classList.contains('expanded'));
}
