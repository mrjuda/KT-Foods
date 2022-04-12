const loadPage = async() => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games//scores/',
      {
        method: 'POST',
        body: JSON.stringify(),
        header: {
          'Content-type': 'application/json; charaset=UTF-8',
        },
      },
    );
    if(response.ok) {
      const section = document.querySelectorAll('#grid');
     
    }
  }
}
