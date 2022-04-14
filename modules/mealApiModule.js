// mealApiModule.js

const getMeal = () => {
  const getM = 'getMeal';
  return getM;
};

const getMeal2 = () => {
  const getM2 = 'getMeal2';
  return getM2;
};

const cardData = [
  {
    // CARD 1 //
    unqId: 'card1',
    foodDesc: 'Ensopado invocado',
    imgSrc: '../src/images/pic1.jpg',
  },
  {
    // CARD 2 //
    unqId: 'card2',
    foodDesc: 'Subway bem estranho',
    imgSrc: '../src/images/pic2.jpg',
  },
  {
    // CARD 3 //
    unqId: 'card3',
    foodDesc: 'Ginga com tapioca',
    imgSrc: '../src/images/pic3.jpg',
  },
  {
    // CARD 4 //
    unqId: 'card4',
    foodDesc: 'Empadão esquisito',
    imgSrc: '../src/images/pic4.jpg',
  },
  {
    // CARD 5 //
    unqId: 'card5',
    foodDesc: 'Feijoada com milho',
    imgSrc: '../src/images/pic5.jpg',
  },
  {
    // CARD 6 //
    unqId: 'card6',
    foodDesc: 'Outro empadão estranho',
    imgSrc: '../src/images/pic6.jpg',
  },
];

export {
  getMeal, getMeal2, cardData,
};
