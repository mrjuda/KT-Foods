/* eslint-disable import/no-unresolved */
// index.js

// import mealList from '../modules/mealList.js';
import DynGrid from '../modules/dyn.js';
import './index.scss';
import loadMeals from '../modules/loadMeals.js';

const myDynGrid = new DynGrid();
const oldHtml = document.getElementById('grid');
myDynGrid.hideIt(oldHtml);
window.addEventListener('load', async () => {
  myDynGrid.showPage(await loadMeals());
});
