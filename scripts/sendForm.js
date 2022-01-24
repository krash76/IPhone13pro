const sendFormFunction = () => {
  const cartDetailsTitle = document.querySelector(".card-details__title");
  const btnOpenModal = document.querySelector(".card-details__button_delivery");
  const modal = document.querySelector(".modal");
  const modalTitle = modal.querySelector(".modal__title");
  const modalClose = modal.querySelector(".modal__close");
  const modalForm = modal.querySelector("form");

  btnOpenModal.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.textContent = cartDetailsTitle.textContent;
  })

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  })

  modalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const labels = modal.querySelectorAll(".modal__label");
    const sendMessage = {};
     
    labels.forEach(label => {
      const span = label.querySelector("span");
      const input = label.querySelector("input");
      sendMessage[span.textContent]=input.value;
    })

    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(sendMessage),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then(() => console.log("has sent"));

    labels.forEach(label => {
      const input = label.querySelector("input");
      input.value = "";
      modal.style.display = "none";
  })
})
}
sendFormFunction();
