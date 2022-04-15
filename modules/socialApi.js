// socialApi.js

const apiAddress = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const unqKey = 'G2DduauHAoRnt2LqV9My';

// const pushComment = (newComment) => {
//   const pushC = newComment;
//   return pushC;
// };
const pushCommentToApi = async (newCommentSet) => {
  console.log(newCommentSet);
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
  // console.log('cumprida 1: ');
  // console.log(commList);
  return commList;
};

// const pullCommCounter = async (id) => {
//   const commListUrl = `${apiAddress}/${unqKey}/comments?item_id=${id}`;
//   const outcome = await fetch(commListUrl);
//   const commList = await outcome.json();
//   const commQt = commList.length;
//   // console.log('cumprida 2: ');
//   // console.log(commQt);
//   return commQt;
// };

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