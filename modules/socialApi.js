// socialApi.js

const apiAddress = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const unqKey = 'G2DduauHAoRnt2LqV9My';

const pushCommentToApi = async (newCommentSet) => {
  const outcome = await fetch(`${apiAddress}/${unqKey}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCommentSet),
  });
  return outcome;
};

const pushComment = (id, name, comm) => {
  const newCommSet = {
    item_id: id,
    username: name,
    comment: comm,
  };
  const outcome = pushCommentToApi(newCommSet);
  return outcome;
};

const pullComments = async (id) => {
  const commListUrl = `${apiAddress}/${unqKey}/comments?item_id=${id}`;
  const outcome = await fetch(commListUrl);
  const commList = await outcome.json();
  return commList;
};

const pullCommCounter = (commList) => commList.length;

const pushLike = () => {
  const pushL = 'addLike';
  return pushL;
};

const pullLikes = () => {
  const pullL = 'getLikes';
  return pullL;
};

export {
  pushLike, pullLikes, pushComment, pullComments, pullCommCounter, unqKey,
};