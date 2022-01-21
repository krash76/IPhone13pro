//console.dir (document);
//document.querySelector('.header-menu__logo').style.border = "1px solid red";

const links = document.querySelectorAll(".header-menu__item a");
seamless.polyfill();

links.forEach((element) => {
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
