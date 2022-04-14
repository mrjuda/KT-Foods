const likes = [52795, 52956, 52831, 52920, 52806, 52850];

const shows = [];
const involvementID = 'GjywrG1wwhuquKQgcAen';

const involvementEndpoints = {
  likes: `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/${involvementID}/likes`,
  comments: `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/${involvementID}/comments`,
};

const showEndpoints = {
  shows: 'https://api.themealdb.com/shows',
};

export default {
  shows,
  likes,
  involvementEndpoints,
  showEndpoints,
};

export const createLikes = async (data) => {
  await fetch(involvementEndpoints.likes, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ item_id: data }),
  });
};

likes.forEach((id) => {
  createLikes(id);
});