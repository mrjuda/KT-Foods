const getCount = require('./counter');

const items = [
  {
    name: 'Have',
    price: 50,
  },
  {
    name: 'Have',
    price: 50,
  },
  {
    name: 'Have',
    price: 50,
  },
  {
    name: 'Have',
    price: 50,
  },
  {
    name: 'Have',
    price: 50,
  },
  {
    name: 'Have',
    price: 50,
  },
  {
    name: 'Have',
    price: 50,
  },
];

test('returns item count', async () => {
  expect(await getCount(items, 5)).toBe(5);
  expect(await getCount(items, 3)).toBe(3);
});
