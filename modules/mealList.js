/* eslint-disable no-await-in-loop */
import { updatelike, sendLike } from '../src/likesApi.js';

const mealList = async (data) => {
  const main = document.querySelector('#grid');

  for (let i = 0; i < 6; i += 1) {
    const image = document.createElement('img');
    image.classList = 'imgClass';
    const mealName = document.createElement('h3');
    const comBtn = document.createElement('button');

    comBtn.innerHTML = 'Comments';
    comBtn.classList = 'commentsBtn';

    const listItem = document.createElement('div');
    listItem.classList = 'gridPoint';
    listItem.id = data[i].idMeal;

    image.src = data[i].strMealThumb;
    mealName.innerHTML = data[i].strMeal;

    const likesText = document.createElement('div');
    likesText.classList.add('count');

    const like = document.createElement('button');
    like.classList.add('like');
    likesText.appendChild(like);

    const likesCount = document.createElement('p');
    likesCount.classList.add('likes-count');
    likesCount.innerHTML = `${await Promise.resolve(updatelike(data[i].idMeal))} likes`;
    likesText.appendChild(likesCount);

    like.addEventListener('click', async () => {
      await Promise.resolve(sendLike(data[i].idMeal));
      likesCount.innerHTML = `${await Promise.resolve(updatelike(data[i].idMeal))} likes`;
    });

    listItem.appendChild(image);
    listItem.appendChild(mealName);
    listItem.appendChild(likesText);
    listItem.appendChild(comBtn);
    main.appendChild(listItem);
  }
};

export default mealList;