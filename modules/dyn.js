// dyn.js

import {
  addLike, getLikes, addComment, getComments,
} from './socialApiModule.js';
import { getMeal, getMeal2, cardData } from './mealApiModule.js';

export default class DynGrid {
  dynamicGrid = document.getElementById('dynamicGrid');

  AddLike = addLike;

  GetLikes = getLikes;

  AddComment = addComment;

  GetComments = getComments;

  GetMeal = getMeal;

  Getmeal2 = getMeal2;

  genCard = (id, unqId, imgSrc, projectName) => {
    // meals > [id] > idMeal
    // const cardId = 'idMeal';
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    // meals > [id] > strMealThumb
    const cardPic = document.createElement('div');
    cardPic.classList.add('card-pic');
    const cardPicImg = document.createElement('img');
    // cardPicImg.src = '../src/images/pic2.jpg';
    cardPicImg.src = `${imgSrc}`;
    cardPic.appendChild(cardPicImg);
    cardContainer.appendChild(cardPic);
    const cardMeta = document.createElement('div');
    cardMeta.classList.add('card-meta');

    // cardMeta.innerHTML = `
    // Testando comida 1
    // `;

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    // meals > [id] > strMeal
    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML = `
    ${projectName}
    `;
    const likeBtn = document.createElement('img');
    likeBtn.classList.add('like-btn');
    likeBtn.src = '../src/icons/like.png';
    likeBtn.alt = 'Like button';

    const likeCounter = document.createElement('div');
    likeCounter.classList.add('like-counter');
    likeCounter.innerHTML = `
    7 likes
    `;
    const commentBtn = document.createElement('div');
    commentBtn.classList.add('comment-btn');
    commentBtn.id = `${id}`;
    commentBtn.innerHTML = `
    Comments:${id}
    `;
    const reserveBtn = document.createElement('div');
    reserveBtn.classList.add('reserve-btn');
    // reserveBtn.innerHTML = `
    // Reservations7
    // `;
    reserveBtn.innerHTML = `
    ${unqId}
    `;
    cardInfo.appendChild(cardTitle);
    cardInfo.appendChild(likeBtn);
    cardMeta.appendChild(cardInfo);
    cardMeta.appendChild(likeCounter);
    cardMeta.appendChild(commentBtn);
    cardMeta.appendChild(reserveBtn);
    cardContainer.appendChild(cardMeta);
    this.dynamicGrid.appendChild(cardContainer);
  }

  showPage = () => {
    // const testGalado = `
    // <h1>Não seja um galado</h1>
    // `;
    // this.dynamicGrid.innerHTML = testGalado;
    const uniqueId = `
    KKpXiSYiKOUJ89ZTxbhq
    `;
    const oldHtml = document.getElementById('cardGrid');
    oldHtml.innerHTML = '';
    this.dynamicGrid.innerHTML = '';

    for (let i = 0; i < 6; i += 1) {
      const cardId = i + 1;
      const uniqueId = cardData[i].unqId;
      // const imgSrc = `../src/images/pic${cardId}.jpg`;
      const picSrc = cardData[i].imgSrc;
      const projectName = cardData[i].project;
      this.genCard(cardId, uniqueId, picSrc, projectName);
    }
  }
}
