// socialApi.js

const apiAddress = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4jsLQspdbzdaBFGyapdL/likes';
const unqKey = '4jsLQspdbzdaBFGyapdL';

const pushCommentToApi = async (pushThisToApi) => {
  const outcome = await fetch(`${apiAddress}/${unqKey}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pushThisToApi),
  });
  return outcome;
};

const pushComment = (id, name, comm) => {
  const pushThisToApi = {
    item_id: id,
    username: name,
    comment: comm,
  };
  const outcome = pushCommentToApi(pushThisToApi);
  return outcome;
};

const pullComments = async (id) => {
  const commListUrl = `${apiAddress}/${unqKey}/comments?item_id=${id}`;
  const outcome = await fetch(commListUrl);
  const commList = await outcome.json();
  return commList;
};

const pullCommCounter = (commList) => commList.length;



export {
  pushLike, pullLikes, pushComment, pullComments, pullCommCounter, unqKey,
};