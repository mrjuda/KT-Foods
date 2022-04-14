const likes = [52795, 52956, 52831, 52920, 52806, 52850];

const shows = [];
const involvementID = '4jsLQspdbzdaBFGyapdL';

const involvementEndpoints = {
  likes: `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementID}/likes`,
  comments: `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementID}/comments`,
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
  await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4jsLQspdbzdaBFGyapdL/likes/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ item_id: data }),
    },
  );
};

likes.forEach((id) => {
  createLikes(id);
});
