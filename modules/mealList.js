const mealList = async (data) => {
  const main = document.querySelector('#grid');

  // for (let i = 0; i <= data.length - 1; i += 1)
  for (let i = 0; i < 6; i += 1) {
  // const mealsDiv = document.createElement('div');

    const image = document.createElement('img');
    image.classList = 'imgClass';
    const mealName = document.createElement('h3');
    const comBtn = document.createElement('button');
    const resBtn = document.createElement('button');

    comBtn.innerHTML = 'Comments';
    comBtn.classList = 'commentsBtn';
    resBtn.innerHTML = 'Reservations';
    resBtn.classList = 'reserveBtn';

    const listItem = document.createElement('div');
    listItem.classList = 'gridPoint';
    listItem.id = data[i].idMeal;

    image.src = data[i].strMealThumb;
    mealName.innerHTML = data[i].strMeal;

    listItem.appendChild(image);
    listItem.appendChild(mealName);
    listItem.appendChild(comBtn);
    listItem.appendChild(resBtn);
    main.appendChild(listItem);
  }
};

export default mealList;