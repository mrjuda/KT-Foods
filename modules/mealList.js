const mealList = async (data) => {
  const main = document.querySelector('#grid');

  for (let i = 0; i <= data.length - 1; i += 1) {
    // const mealsDiv = document.createElement('div');

    const image = document.createElement('img');
    image.classList = 'imgClass';
    const mealName = document.createElement('h3');

    const listItem = document.createElement('div');
    listItem.classList = 'gridPoint';
    listItem.id = data[i].idMeal;
    // foodDiv.setAttribute('data-id, '${data[i].idMeal}');

    image.src = data[i].strMealThumb;
    mealName.innerHTML = data[i].strMeal;

    listItem.appendChild(image);
    listItem.appendChild(mealName);
    main.appendChild(listItem);
  }
};

export default mealList;