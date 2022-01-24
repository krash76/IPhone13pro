//console.dir (document);
//document.querySelector('.header-menu__logo').style.border = "1px solid red";

const scrollFunction = () => {
  const links = document.querySelectorAll(".header-menu__item a");
  const linkCharacteristics = document.querySelector(".card-details__link-characteristics");

  const arrayOfLinks =  [...links, linkCharacteristics];

  seamless.polyfill();

  arrayOfLinks.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      const id = element.getAttribute("href").substring(1);
      
    const section = document.getElementById(id);
      if (section) {
        seamless.elementScrollIntoView( section, {
          behavior: "smooth",
          block: "start" 
        })
      } else {
          seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
            behavior: "smooth",
            block: "center",
            inline: "center",
      });
      }
    })
  })
}

scrollFunction();




