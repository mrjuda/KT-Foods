import './index.scss';

const getID = async (endpoint) => {
  let response;
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.text());
  } catch (error) {
    return error.message;
  }
  return response.ok;
};

getID('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/');