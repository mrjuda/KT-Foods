// creating a function that reloads the page
const reLoad = document.querySelector('.card-grid');

const load = () => {
  console.log(reLoad);
  reLoad.addEventListener('reload', () => {
    window.location.reload();
  });
};

export default load;