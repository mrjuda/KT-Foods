import { setLikes, getLikes } from '../src/likesApi.js';

export default () => ({
  async handleSetLike() {
    getElement('.food-List').addEventLister('click', async (e) => {
      e.preventDefault();
      if (e.target.className === 'like-icon') {
        const id = e.target.getAttribute(id);
        await setLikes(id);
        const meals = await getMeals();
        const likes = await getLikes();
        listFoods(meals, likes);
      }
    });
  },

//   async init() {
//     const meals = await getMeals();
//     const likes = await getLikes();
//     homePage();
//     listFoods(meals, likes);
//     const counter = getElement('.meals');
//     mealsCounter(meals, counter);
//     this.handleSetLike();
//   },
// });