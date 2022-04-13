const loadPage = async() => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/c2i7GgLdDFFaD5JEzNMX/scores/',
      {
        method: 'POST',
        body: JSON.stringify(),
        header: {
          'Content-type': 'application/json; charaset=UTF-8',
        },
      },
    );
    if(response.ok) {
      console.log(response);
      const section = {
        image: '../src/images/pic1.jpg',
        title: 'Food 1',
      };

      function createPage() {
        const oneSection = document.createElement('section');
        const div = document.createElement('div');
        div.classList = 'card-container';
        oneSection.appendChild(div);

        const imgDiv = document.createElement('div');
        imgDiv.classList = 'card-pic';
        div.appendChild(imgDiv);

        const divMeta = document.createElement('div')
        divMeta.classList = "card-meta";
        div.appendChild(divMeta);

        const divInfo = document.createElement('div');
        divInfo.classList = 'card-info'
        divMeta.appendChild(divInfo);

        const divTitle = document.createElement('div');
        divTitle.classList = 'card-title';
        divInfo.appendChild(divTitle);

        const likeImg = document.createElement('img')
        likeImg.classList = 'like-btn';
        divInfo.appendChild(likeImg);

      }
      // for (let i = 0; i < oneSection.length; i += 1) {
      //   const oneSection = document.createElement('div');
      // };