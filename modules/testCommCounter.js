// testCommCounter.js

const pullComments = (obj) => {
  const objprs = JSON.parse(obj);
  const objsize = objprs.length;
  // console.log(objprs);
  // console.log(objsize);
  return objsize;
};

// pullComments(obj1);

// export default { pullComments };

module.exports = pullComments;