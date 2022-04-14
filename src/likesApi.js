const shows = [];
const likes = [];
const involvementID = 'GjywrG1wwhuquKQgcAen';

const involvementEndpoints = {
  likes: `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/${involvementID}/likes`,
  comments: `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/${involvementID}/comments`
};

const showEndpoints = {
  shows: 'https://api.themealdb.com/shows',
};

export default {
  shows, likes, involvementEndpoints, showEndpoints,
};

