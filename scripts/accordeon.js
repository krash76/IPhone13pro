const accordeonFunction = () => {
  const chItems = document.querySelectorAll(".characteristics__item");
  

  chItems.forEach(item => {
    const itemButton = item.querySelector(".characteristics__title");
    const itemContent = item.querySelector(".characteristics__description");
   
    
    itemButton.addEventListener("click", () => {
      if (itemContent.classList.contains("open")) {
        itemContent.style.height = "";
      } else {
        itemContent.style.height = itemContent.scrollHeight + "px";
      }
      itemButton.classList.toggle("active");
      itemContent.classList.toggle("open");
    })
  })
}

accordeonFunction();