document
  .querySelector(".share")
  .addEventListener("click", function toggleSocial() {
    document.querySelector(".social").classList.toggle("hidden");
    document.querySelector(".card__details-right").classList.toggle("active");
  });
