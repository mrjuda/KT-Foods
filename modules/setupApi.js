const apiAddress = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const newInteraction = async () => {
  const response = await fetch(apiAddress, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(),
  });

  const data = await response.json();
  return data;
};

newInteraction();