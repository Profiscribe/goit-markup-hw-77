(() => {
  const refs = {
    openMenuBtn: document.querySelector(".open-btn"),
    closeMenuBtn: document.querySelector(".close-btn"),
    menu: document.querySelector(".mob-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleModal() {
    refs.menu.classList.toggle("is-hidden");
  }
})();