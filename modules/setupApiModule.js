const apiAddress = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const newInteraction = async () => {
  const response = await fetch(apiAddress, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ name: 'KTMeals' }),
  });

  const data = await response.json();
  return data;
};

newInteraction();