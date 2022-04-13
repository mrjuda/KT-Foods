// creating a function that reloads the page
const loadMeals = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken',
  );
  const result = await response.json();
  return result.meals;
};

export default loadMeals;