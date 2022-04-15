// index.js

import DynGrid from '../modules/dyn.js';
import './index.scss';
import loadMeals from '../modules/loadMeals.js';

const myDynGrid = new DynGrid();
// const oldHtml = document.getElementById('grid');
// myDynGrid.hideIt(oldHtml);
window.addEventListener('load', async () => {
  // myDynGrid.showPopup(3);
  // myDynGrid.showPage();
  myDynGrid.showPage(await loadMeals());
});
/* eslint-disable import/no-unresolved */
import './index.scss';
import loadMeals from '../modules/loadMeals.js';
import mealList from '../modules/mealList.js';

window.addEventListener('load', async () => {
  console.log(await loadMeals());
  mealList(await loadMeals());
});

const getID = async (endpoint) => {
  let response;
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.ok());
  } catch (error) {
    return error.message;
  }
  return response.ok;
};

getID('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/');
