
const tabsFunction = () =>{
  const tabs = document.querySelectorAll(".card-detail__change");
  const tabTitle = document.querySelector(".card-details__title");
  const tabPrice = document.querySelector(".card-details__price");
  const tabImage = document.querySelector(".card__image_item");
  const title = document.getElementsByTagName("title");
   
  const tabOptions = [
    {
      name: "Graphite",
      memory: "128",
      price: 60000,
      image:"img/iPhone-graphite.webp"
    },
  {
      name: "Silver",
      memory: "256",
      price: 65000,
      image:"img/iPhone-silver.webp"
    },
  {
      name: "Sierra Blue",
      memory: "528",
      price: 70000,
      image:"img/iPhone-sierra_blue.webp"
    }
  ]

  const changeContent = (index) => {
    tabTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabOptions[index].memory}GB ${tabOptions[index].name}`;
    tabPrice.textContent = `${tabOptions[index].price}₽`;
    tabImage.setAttribute("src", tabOptions[index].image);
    title.item(0).innerHTML = `iPhone ${tabOptions[index].name}` ;
  }


  const changeActiveTabs= (clickedTabIndex) => {
    tabs.forEach((tab, index) => {
      tab.classList.remove("active");
      if (index === clickedTabIndex) {
        tab.classList.add("active");
      }
    })
    changeContent(clickedTabIndex)
  } 

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      changeActiveTabs(index)
    })
  })

  changeContent(0);

  //или поменять в html 99990 на 60000
}

tabsFunction();
