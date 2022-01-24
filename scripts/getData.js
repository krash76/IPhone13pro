const getDataFunction = () => {
  const dataList = document.querySelector(".cross-sell__list");
  const btnShowElse = document.querySelector(".cross-sell__add");
  
  let stack = 4;
  let count = 1;

  const render = (data) => {
    dataList.innerHTML = "";
    data.forEach(item => {
      console.log (item);
      dataList.insertAdjacentHTML("beforeend", 
          `<li>
						<article class="cross-sell__item">
							<img class="cross-sell__image" src="./${item.photo}" alt="${item.id}">
							<h3 class="cross-sell__title">${item.name}</h3>
							<p class="cross-sell__price">${item.price}₽</p>
							<button type="button" class="button button_buy cross-sell__button">Купить</button>
						</article>
					</li>`)
    })
  };

  const sliceArray = (data, index) => {
    render(data.slice(0, index))
  }    

  const changeData = (data) => {
    const newStack = stack * count;
    render(sliceArray(data, newStack));
    if (data.length > newStack) {
      count++
    } else {
      btnShowElse.style.display = "none"
    }
  }

  const getGoods = () => {
    fetch('https://promoiphone13-default-rtdb.firebaseio.com/')
    .then((response) =>  {
    if(response.ok) {
      return response.json();
    } else {
      throw new Error("Data received with error! ");
    }})
    .then((data) => {
      changeData(data)
    })
    .catch((error) => {
    console.error(error.message)
   })
  }

  btnShowElse.addEventListener("click", getGoods)
  getGoods();
}
 
getDataFunction();