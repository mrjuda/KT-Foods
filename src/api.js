class likesContent {
  invURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/5P3Y5z2n9UB0UfjvnCPt/likes'

  static getLikes = async (id) => {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/JSON',
      },
    });
    const data = await response.text();
    return data;
  };

  static setLikes = async () => {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  };
}

export default { likesContent };