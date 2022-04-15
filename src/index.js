// index.js

import DynGrid from '../modules/dyn.js';
import './index.scss';

const oldHtml = document.getElementById('cardGrid');
const myDynGrid = new DynGrid();

myDynGrid.hideIt(oldHtml);
myDynGrid.showPage();
// myDynGrid.showPopup(3);