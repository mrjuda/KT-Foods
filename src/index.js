/* eslint-disable import/no-unresolved */
import './index.scss';
import loadMeals from '../modules/loadMeals.js';
import mealList from '../modules/mealList.js';

window.addEventListener('load', async () => {
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
  } catch (error) {
    return error.message;
  }
  return response.ok;
};

getID('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/');