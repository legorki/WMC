const closeButtons = document.querySelectorAll(".modal-close");

closeButtons.forEach(
  button => button.addEventListener("click", e => {
    const modals = document.querySelectorAll(".modal");

    modals.forEach(modal => modal.style.display = "none");
  }));