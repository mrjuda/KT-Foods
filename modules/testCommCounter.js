// testCommCounter.js

const pullComments = (obj) => {
  const objprs = JSON.parse(obj);
  const objsize = objprs.length;
  return objsize;
};

module.exports = pullComments;