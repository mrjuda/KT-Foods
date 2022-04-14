// socialApi.js
const apiAddress = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const uniqueId = 'G2DduauHAoRnt2LqV9My';

const pushComment = (newComment) => {
  const pushC = newComment;
  return pushC;
};

const pullComments = (id) => {
  alert(id + apiAddress);
  const pullC = 'getComments';
  return pullC;
};

const pushLike = () => {
  const pushL = 'addLike';
  return pushL;
};

const pullLikes = () => {
  const pullL = 'getLikes';
  return pullL;
};

export {
  pushLike, pullLikes, pushComment, pullComments, uniqueId,
};