/* eslint-disable import/no-unresolved */
// index.js

import DynGrid from '../modules/dyn.js';
import './index.scss';
import loadMeals from '../modules/loadMeals.js';

const myDynGrid = new DynGrid();
window.addEventListener('load', async () => {
  myDynGrid.showPage(await loadMeals());
});
