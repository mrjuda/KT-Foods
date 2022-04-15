// testCommCounter.test.js

// const { pullComments } = require('./testCommCounter.js');
const pullComments = require('./testCommCounter.js');

const obj1 = `
[{"creation_date":"2022-04-15","username":"Judá","comment":"Testando1"},{"username":"JT","comment":"test2","creation_date":"2022-04-15"},{"comment":"t3","username":"JT","creation_date":"2022-04-15"},{"username":"","comment":"","creation_date":"2022-04-15"},{"username":"","creation_date":"2022-04-15","comment":""},{"username":"t6","comment":"t6","creation_date":"2022-04-15"},{"creation_date":"2022-04-15","username":"t7","comment":"t7"},{"username":"t8","creation_date":"2022-04-15","comment":"t8"},{"comment":"t9","username":"t9","creation_date":"2022-04-15"},{"username":"t10","creation_date":"2022-04-15","comment":"t10"},{"username":"t11","comment":"t11","creation_date":"2022-04-15"},{"username":"","creation_date":"2022-04-15","comment":""},{"comment":"","creation_date":"2022-04-15","username":""},{"username":"","comment":"","creation_date":"2022-04-15"},{"username":"t15","creation_date":"2022-04-15","comment":"t15"},{"username":"","creation_date":"2022-04-15","comment":""},{"username":"t17","creation_date":"2022-04-15","comment":"t17"},{"comment":"t18","username":"t18","creation_date":"2022-04-15"},{"username":"","comment":"","creation_date":"2022-04-15"},{"comment":"","creation_date":"2022-04-15","username":""},{"username":"","creation_date":"2022-04-15","comment":""}]
`;

const obj2 = `
[{"username":"c1","creation_date":"2022-04-15","comment":"c1"},{"creation_date":"2022-04-15","comment":"","username":""},{"creation_date":"2022-04-15","comment":"","username":""},{"creation_date":"2022-04-15","comment":"","username":""},{"creation_date":"2022-04-15","comment":"","username":""},{"creation_date":"2022-04-15","username":"t6","comment":"t6"},{"username":"t7","creation_date":"2022-04-15","comment":"t7"},{"comment":"t8","creation_date":"2022-04-15","username":"t8"},{"creation_date":"2022-04-15","comment":"t9","username":"t9"},{"comment":"t10","creation_date":"2022-04-15","username":"t10"},{"creation_date":"2022-04-15","comment":"t11","username":"t11"},{"comment":"comment 12","username":"name 12","creation_date":"2022-04-15"},{"creation_date":"2022-04-15","username":"name 13","comment":"comment 13"},{"comment":"comment 14","username":"name 14","creation_date":"2022-04-15"},{"creation_date":"2022-04-15","comment":"comment","username":"have"},{"creation_date":"2022-04-15","comment":"","username":""}]
`;

test('Should return 21 comments', () => {
  expect(pullComments(obj1)).toBe(21);
});

test('Should return 15 comments', () => {
  expect(pullComments(obj2)).toBe(16);
});