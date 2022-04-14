// index.js

import DynGrid from '../modules/dyn.js';
import './index.scss';

const oldHtml = document.getElementById('cardGrid');
oldHtml.innerHTML = '';
oldHtml.className = 'zeroSpacing';
oldHtml.classList.add('hide');

const myDynGrid = new DynGrid();

// myDynGrid.GetMeal();
// myDynGrid.AddComment();
// myDynGrid.AddLike();
// myDynGrid.GetComments();
// myDynGrid.GetLikes();

myDynGrid.showPage();
// myDynGrid.showPopup(0);