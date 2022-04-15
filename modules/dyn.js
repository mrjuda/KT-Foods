// dyn.js

import {
  pushLike, pullLikes, pushComment, pullComments, pullCommCounter,
} from './socialApi.js';
import { getMeal, getMeal2, cardData } from './mealApiModule.js';

export default class DynGrid {
  header = document.getElementById('Header');

  footer = document.getElementById('Footer');

  dynamicGrid = document.getElementById('dynamicGrid');

  PushLike = pushLike;

  PullLikes = pullLikes;

  GetMeal = getMeal;

  Getmeal2 = getMeal2;

  genCard = (i, imgSrc, foodName) => {
    const id = i + 1;
    const cardContainer = document.createElement('div');
    const cardPic = document.createElement('div');
    const cardPicImg = document.createElement('img');
    cardPicImg.src = `${imgSrc}`;
    const cardMeta = document.createElement('div');
    const cardInfo = document.createElement('div');
    const cardTitle = document.createElement('div');
    cardTitle.innerHTML = `${foodName}`;
    const cardSocials = document.createElement('div');
    const likeBtn = document.createElement('img');
    likeBtn.src = '../src/icons/like.png';
    likeBtn.alt = 'Like button';
    const likeCounter = document.createElement('div');
    likeCounter.innerHTML = `${id} likes`;
    const commentBtn = document.createElement('div');
    commentBtn.id = `${id}`;
    commentBtn.innerHTML = 'Comments';
    const reserveBtn = document.createElement('div');
    reserveBtn.innerHTML = 'Reservations';

    cardPic.classList.add('card-pic');
    cardMeta.classList.add('card-meta');
    cardInfo.classList.add('card-info');
    cardTitle.classList.add('card-title');
    cardSocials.classList.add('card-socials');
    likeBtn.classList.add('like-btn');
    likeCounter.classList.add('like-counter');
    commentBtn.classList.add('comment-btn');
    reserveBtn.classList.add('reserve-btn');
    cardContainer.className = 'card-container';
    this.dynamicGrid.className = 'dynamic-grid';

    cardPic.appendChild(cardPicImg);
    cardSocials.appendChild(likeBtn);
    cardSocials.appendChild(likeCounter);
    cardInfo.appendChild(cardTitle);
    cardInfo.appendChild(cardSocials);
    cardMeta.appendChild(cardInfo);
    cardMeta.appendChild(commentBtn);
    cardMeta.appendChild(reserveBtn);
    cardContainer.appendChild(cardPic);
    cardContainer.appendChild(cardMeta);
    this.dynamicGrid.appendChild(cardContainer);

    commentBtn.addEventListener('click', () => {
      this.showPopup(i);
    });
  }

  paintComments = (id, commentBoard, newC) => {
    if (newC) {
      const tmpCommBoardContent = document.getElementById('commBoardContent');
      commentBoard.removeChild(tmpCommBoardContent);
    }

    const commBoardContent = document.createElement('div');
    commBoardContent.id = 'commBoardContent';

    pullComments(id).then((outcome) => {
      if (outcome.error) {
        commBoardContent.innerHTML = '<h2>Comments (0)</h2> <span>\nNo comments</span>';
      } else {
        commBoardContent.innerHTML = `<h2>Comments (${pullCommCounter(outcome)})</h2>`;

        const commList = document.createElement('ul');
        commList.id = 'commList';
        outcome.forEach((comment) => {
          commList.innerHTML += `
          <li>
          <span>[${comment.creation_date}]</span>
          <span>${comment.username}: </span>
          <span> ${comment.comment}</span>
          </li>
          `;
        });
        commBoardContent.appendChild(commList);
      }
    }, () => {
      commBoardContent.innerHTML = '<span> NO COMMENTSSS</span>';
    });
    commentBoard.appendChild(commBoardContent);
  };

  genPopup = (id, imgSrc, foodName) => {
    this.dynamicGrid.className = 'dynamic-grid-popup';
    const popupContainer = document.createElement('div');
    popupContainer.className = 'popup-container';
    popupContainer.id = 'popupContainer';

    const mealInfo = document.createElement('div');
    mealInfo.className = 'meal-info';

    const popupHeader = document.createElement('div');
    popupHeader.className = 'popup-header';

    const empty = document.createElement('div');
    empty.className = 'empty';
    empty.innerHTML = ' ';

    const cardPic = document.createElement('div');
    cardPic.className = 'popup-card-pic';

    const popupImg = document.createElement('img');
    popupImg.src = `${imgSrc}`;
    popupImg.alt = `${foodName}`;

    const popupX = document.createElement('div');
    popupX.className = 'popup-x';
    popupX.innerHTML = 'X';

    const popupMeta = document.createElement('div');
    popupMeta.className = 'popup-meta';
    popupMeta.innerHTML = `
    <div class="popup-info">
      <h1 class="popup-title">${foodName}</h1>
    </div>
    `;

    cardPic.appendChild(popupImg);
    popupHeader.appendChild(empty);
    popupHeader.appendChild(cardPic);
    popupHeader.appendChild(popupX);
    mealInfo.appendChild(popupHeader);
    mealInfo.appendChild(popupMeta);

    const commentBoard = document.createElement('div');
    commentBoard.className = 'comment-board';

    const newC = false;
    this.paintComments(id, commentBoard, newC);

    const commentForm = document.createElement('form');
    commentForm.className = 'comment-form';
    commentForm.innerHTML = `
    <h2 class="comment-counter">Add a comment</h2>
    `;

    const newName = document.createElement('input');
    newName.id = 'newName';
    newName.type = 'text';
    newName.className = 'new-name';
    newName.name = 'newName';
    newName.required = true;
    newName.minlength = 1;
    newName.maxlength = 30;
    newName.placeholder = 'Your name';
    commentForm.appendChild(newName);

    const newComment = document.createElement('textarea');
    newComment.id = 'newComment';
    newComment.className = 'new-comment';
    newComment.name = 'newComment';
    newComment.required = true;
    newComment.minlength = 2;
    newComment.maxlength = 300;
    newComment.placeholder = 'Your comment';
    commentForm.appendChild(newComment);

    const addCommentBtn = document.createElement('button');
    addCommentBtn.id = `addBtn${id}`;
    addCommentBtn.type = 'button';
    addCommentBtn.className = 'btn';
    addCommentBtn.innerHTML = 'Comment';
    commentForm.appendChild(addCommentBtn);

    popupContainer.appendChild(mealInfo);
    popupContainer.appendChild(commentBoard);
    popupContainer.appendChild(commentForm);

    this.dynamicGrid.appendChild(popupContainer);

    popupX.addEventListener('click', () => {
      this.showPage();
    });

    addCommentBtn.addEventListener('click', () => {
      pushComment(id, newName.value, newComment.value);
      commentForm.reset();
      const newC = true;

      this.paintComments(id, commentBoard, newC);
    });
  }

  showPage = () => {
    const cardQt = 6;
    const home = document.getElementById('Home');
    home.innerHTML = `Home (${cardQt})`;
    this.dynamicGrid.innerHTML = '';
    this.header.className = 'header';
    this.footer.className = 'footer';

    for (let i = 0; i < cardQt; i += 1) {
      const cardId = i;
      const picSrc = cardData[i].imgSrc;
      const foodName = cardData[i].foodDesc;
      this.genCard(cardId, picSrc, foodName);
    }
  }

  showPopup = (i) => {
    this.dynamicGrid.innerHTML = '';
    this.header.className = 'hide';
    this.footer.className = 'hide';
    const cardId = i + 50;
    const picSrc = cardData[i].imgSrc;
    const foodName = cardData[i].foodDesc;
    this.genPopup(cardId, picSrc, foodName);
  }

  hideIt = (item) => {
    item.innerHTML = '';
    item.className = 'zeroSpacing';
    item.classList.add('hide');
  }
}
