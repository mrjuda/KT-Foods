// dyn.js

import {
  addLike, getLikes, addComment, getComments,
} from './socialApiModule.js';
import { getMeal, getMeal2, cardData } from './mealApiModule.js';

export default class DynGrid {
  header = document.getElementById('Header');

  footer = document.getElementById('Footer');

  dynamicGrid = document.getElementById('dynamicGrid');

  AddLike = addLike;

  GetLikes = getLikes;

  AddComment = addComment;

  GetComments = getComments;

  GetMeal = getMeal;

  Getmeal2 = getMeal2;

  genCard = (i, unqId, imgSrc, foodName) => {
    const id = i + 1;
    const cardContainer = document.createElement('div');
    const cardPic = document.createElement('div');
    const cardPicImg = document.createElement('img');
    cardPicImg.src = `${imgSrc}`;
    const cardMeta = document.createElement('div');
    const cardInfo = document.createElement('div');
    const cardTitle = document.createElement('div');
    cardTitle.innerHTML = `${foodName}`;
    const likeBtn = document.createElement('img');
    likeBtn.src = '../src/icons/like.png';
    likeBtn.alt = 'Like button';
    const likeCounter = document.createElement('div');
    likeCounter.innerHTML = `${id} likes`;
    const commentBtn = document.createElement('div');
    commentBtn.id = `${id}`;
    commentBtn.innerHTML = `Comments: ${id}`;
    const reserveBtn = document.createElement('div');
    reserveBtn.innerHTML = `Res: ${unqId}`;

    cardPic.classList.add('card-pic');
    cardMeta.classList.add('card-meta');
    cardInfo.classList.add('card-info');
    cardTitle.classList.add('card-title');
    likeBtn.classList.add('like-btn');
    likeCounter.classList.add('like-counter');
    commentBtn.classList.add('comment-btn');
    reserveBtn.classList.add('reserve-btn');
    cardContainer.className = 'card-container';
    this.dynamicGrid.className = 'dynamic-grid';

    cardPic.appendChild(cardPicImg);
    cardInfo.appendChild(cardTitle);
    cardInfo.appendChild(likeBtn);
    cardMeta.appendChild(cardInfo);
    cardMeta.appendChild(likeCounter);
    cardMeta.appendChild(commentBtn);
    cardMeta.appendChild(reserveBtn);
    cardContainer.appendChild(cardPic);
    cardContainer.appendChild(cardMeta);
    this.dynamicGrid.appendChild(cardContainer);

    commentBtn.addEventListener('click', () => {
      this.showPopup(i);
    });
  }

  genCardPopup = (id, unqId, imgSrc, foodName) => {
    const cardContainer = document.createElement('div');
    const popupX = document.createElement('div');
    popupX.innerHTML = 'X';
    const cardPic = document.createElement('div');
    const cardPicImg = document.createElement('img');
    cardPicImg.src = `${imgSrc}`;
    const cardMeta = document.createElement('div');
    const cardInfo = document.createElement('div');
    const cardTitle = document.createElement('div');
    cardTitle.innerHTML = `${foodName}`;
    const likeBtn = document.createElement('img');
    likeBtn.src = '../src/icons/like.png';
    likeBtn.alt = 'Like button';
    const likeCounter = document.createElement('div');
    likeCounter.innerHTML = `${id} likes`;
    const commentBtn = document.createElement('div');
    commentBtn.id = `${id}`;
    commentBtn.innerHTML = `Comments: ${id}`;
    const reserveBtn = document.createElement('div');
    reserveBtn.innerHTML = `Res: ${unqId}`;

    cardPic.classList.add('card-pic');
    cardMeta.classList.add('card-meta');
    cardInfo.classList.add('card-info');
    cardTitle.classList.add('card-title');
    likeBtn.classList.add('like-btn');
    likeCounter.classList.add('like-counter');
    commentBtn.classList.add('comment-btn');
    reserveBtn.classList.add('reserve-btn');
    cardContainer.className = 'card-popup';
    popupX.className = 'card-popup-x';
    this.dynamicGrid.className = 'dynamic-grid-popup';

    cardPic.appendChild(cardPicImg);
    cardContainer.appendChild(popupX);
    cardContainer.appendChild(cardPic);
    cardInfo.appendChild(cardTitle);
    cardInfo.appendChild(likeBtn);
    cardMeta.appendChild(cardInfo);
    cardMeta.appendChild(likeCounter);
    cardMeta.appendChild(commentBtn);
    cardMeta.appendChild(reserveBtn);
    cardContainer.appendChild(cardMeta);
    this.dynamicGrid.appendChild(cardContainer);

    popupX.addEventListener('click', () => {
      this.showPage();
    });
  }

  showPage = () => {
    const oldHtml = document.getElementById('cardGrid');
    oldHtml.innerHTML = '';
    this.dynamicGrid.innerHTML = '';
    this.header.className = 'header';
    this.footer.className = 'footer';

    for (let i = 0; i < 6; i += 1) {
      const cardId = i;
      const uniqueId = cardData[i].unqId;
      // const imgSrc = `../src/images/pic${cardId}.jpg`;
      const picSrc = cardData[i].imgSrc;
      const foodName = cardData[i].foodDesc;
      this.genCard(cardId, uniqueId, picSrc, foodName);
    }
  }

  showPopup = (i) => {
    this.dynamicGrid.innerHTML = '';
    this.header.className = 'hide';
    this.footer.className = 'hide';
    // this.hideIt(this.header);
    // this.hideIt(this.footer);
    const cardId = i + 1;
    const uniqueId = cardData[i].unqId;
    // const imgSrc = `../src/images/pic${cardId}.jpg`;
    const picSrc = cardData[i].imgSrc;
    const foodName = cardData[i].foodDesc;
    this.genCardPopup(cardId, uniqueId, picSrc, foodName);
  }

  hideIt = (item) => {
    // item.innerHTML = '';
    // item.className = 'zeroSpacing';
    item.classList.add('hide');
  }
}
