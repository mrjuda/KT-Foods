// socialApiModule.js

const addComment = async () => {
  const response = await fetch(uniqueGame, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: newName.value,
      score: newScore.value,
    }),
  });

  const data = await response.json();
  return data;
};