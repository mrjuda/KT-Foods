// dyn.js

import {
  addLike, getLikes, addComment, getComments,
} from './socialApiModule.js';
import { getMeal, getMeal2 } from './mealApiModule.js';

export default class DynGrid {
  dynamicGrid = document.getElementById('dynamicGrid');

  AddLike = addLike;

  GetLikes = getLikes;

  AddComment = addComment;

  GetComments = getComments;

  GetMeal = getMeal;

  Getmeal2 = getMeal2;

  genCard = () => {
    // meals > [id] > idMeal
    // const cardId = 'idMeal';
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    // meals > [id] > strMealThumb
    // const cardPic = document.createElement('div');
    // cardPic.classList.add('card-pic');
    // cardContainer.appendChild(cardPic);
    const cardMeta = document.createElement('div');
    cardMeta.classList.add('card-meta');

    cardMeta.innerHTML = `
    Testando comida 1
    `;

    // const cardInfo = document.createElement('div');
    // cardInfo.classList.add('card-info');
    // // meals > [id] > strMeal
    // const cardTitle = document.createElement('div');
    // cardTitle.classList.add('card-title');
    // cardTitle.innerHTML = `
    // Testando comida 1
    // `;
    // const likeBtn = `
    // <img class="like-btn" src="../src/icons/like.png" alt="Like button">
    // `;
    // const likeCounter = document.createElement('div');
    // likeCounter.classList.add('like-counter');
    // const commentBtn = document.createElement('div');
    // commentBtn.classList.add('comment-btn');
    // const reserveBtn = document.createElement('div');
    // reserveBtn.classList.add('reserve-btn');
    // cardInfo.appendChild(cardTitle);
    // cardInfo.appendChild(likeBtn);
    // cardMeta.appendChild(cardInfo);
    // cardMeta.appendChild(likeCounter);
    // cardMeta.appendChild(commentBtn);
    // cardMeta.appendChild(reserveBtn);
    cardContainer.appendChild(cardMeta);
  }

  showPage = () => {
    const testGalado = `
    <h1>Não seja um galado</h1>
    `;
    console.log(testGalado);
    const testGalado2 = this.genCard();
    this.dynamicGrid.innerHTML = testGalado2.cardContainer;
  }
}
