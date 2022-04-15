const likes = [{ id: '52795' }, { id: '52956' }, { id: '52831' }, { id: '52920' },
  { id: '52806' }, { id: '52850' }];

const like = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4jsLQspdbzdaBFGyapdL/likes/';

const createLikes = async (data) => {
  await fetch(like, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ item_id: data.item_id }),
  });
};

const getLike = async () => {
  const response = await fetch(like);
  const likes = await response.json();
  return likes;
};

const sendLike = async (id) => {
  const data = {
    item_id: id,
  };
  Promise.resolve(await createLikes(data));
};

const updatelike = async (id) => {
  const data = await Promise.resolve(getLike());
  const li = (data);
  let cont = 0;
  for (let i = 0; i < li.length; i += 1) {
    if (li[i].item_id === id) {
      cont = li[i].likes;
    }
  }
  return cont;
};

export {
  likes,
  createLikes,
  updatelike,
  sendLike,
};