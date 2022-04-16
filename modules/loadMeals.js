// creating a function that reloads the page
const loadMeals = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  );
  const result = await response.json();
  return result.meals;
};

export default loadMeals;