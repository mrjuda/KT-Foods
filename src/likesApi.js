/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
const invURL =
  // eslint-disable-next-line quotes
  `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/5P3Y5z2n9UB0UfjvnCPt/likes`;

// eslint-disable-next-line import/prefer-default-export
export const setLikes = async (id) => {
  const headers = new Headers();
  headers.append('content-Type', 'application/json');

  const newinput = JSON.stringify({ item_id: id });

  const requestOptions = {
    method: 'POST',
    headers,
    body: newinput,
    redirect: 'follow',
  };

  await fetch(invURL, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
};

export const getLikes = async () => {
  try {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    const response = await fetch(invURL, requestOptions);
    const likes = await response.json();
    return likes;
  } catch (error) {
    return [];
  }
};
